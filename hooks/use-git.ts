import { useState, useCallback } from 'react';

export type Commit = { hash: string; msg: string; branch: string };

export const useGit = () => {
  const [isInit, setIsInit] = useState(false);
  const [branch, setBranch] = useState('main');
  const [branches, setBranches] = useState(['main']);
  const [staged, setStaged] = useState<string[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [remoteCommits, setRemoteCommits] = useState<Commit[]>([]);
  
  // Define files inside the hook to ensure it's always returned
  const files = ['index.html', 'styles.css', 'app.js'];

  const execute = useCallback((val: string) => {
    const parts = val.trim().split(/\s+/);
    const cmd = parts[0];
    const sub = parts[1];
    const args = parts.slice(2);

    if (cmd === 'help') {
      return { 
        res: "Commands: git init, git add ., git commit -m 'msg', git branch [name], git checkout [name], git merge [name], git push origin [branch], git log, git status", 
        type: 'info' 
      };
    }

    if (cmd !== 'git') return { res: `command not found: ${cmd}`, type: 'error' };
    if (!isInit && sub !== 'init') return { res: "fatal: not a git repository", type: 'error' };

    switch (sub) {
      case 'init':
        if (isInit) return { res: "Reinitialized existing Git repository.", type: 'info' };
        setIsInit(true);
        return { res: "Initialized empty Git repository.", type: 'success', action: 'INIT' };

      case 'status':
        let status = `On branch ${branch}\n`;
        if (staged.length > 0) {
          status += `Changes to be committed:\n${staged.map(f => `  new file: ${f}`).join('\n')}`;
        } else {
          status += "nothing to commit, working tree clean";
        }
        return { res: status, type: 'info' };

      case 'add':
        if (args[0] === '.' || args[0] === '-A') {
          setStaged([...files]);
          return { res: "Files added to staging area.", type: 'success', action: 'ADD' };
        }
        return { res: "usage: git add <filepattern>", type: 'error' };

      case 'commit':
        if (staged.length === 0) return { res: "nothing to commit, working tree clean", type: 'info' };
        const msgMatch = val.match(/'([^']+)'/) || val.match(/"([^"]+)"/);
        const msg = msgMatch ? msgMatch[1] : "Update";
        const hash = Math.random().toString(16).substring(2, 8);
        const newCommit = { hash, msg, branch };
        
        setCommits(prev => [newCommit, ...prev]);
        setStaged([]);
        return { res: `[${branch} ${hash}] ${msg}`, type: 'success', action: 'COMMIT', data: newCommit };

      case 'log':
        // Show history of current branch
        const history = commits.filter(c => c.branch === branch);
        if (history.length === 0) return { res: "No commits yet.", type: 'info' };
        return { 
          res: history.map(c => `commit ${c.hash}\nAuthor: User\n\n    ${c.msg}`).join('\n\n'), 
          type: 'info' 
        };

      case 'branch':
        const name = args[0];
        if (!name) return { res: branches.map(b => b === branch ? `* ${b}` : `  ${b}`).join('\n'), type: 'info' };
        if (branches.includes(name)) return { res: `fatal: branch '${name}' already exists`, type: 'error' };
        setBranches(prev => [...prev, name]);
        return { res: `Created branch ${name}`, type: 'success' };

      case 'checkout':
        const target = args[0];
        if (!branches.includes(target)) return { res: `error: pathspec '${target}' not found`, type: 'error' };
        setBranch(target);
        return { res: `Switched to branch '${target}'`, type: 'success' };

      case 'merge':
        const targetB = args[0];
        if (!targetB || !branches.includes(targetB)) return { res: "Invalid branch", type: 'error' };
        
        const targetCommits = commits.filter(c => c.branch === targetB);
        const currentHashes = new Set(commits.filter(c => c.branch === branch).map(c => c.hash));
        const missing = targetCommits.filter(c => !currentHashes.has(c.hash)).map(c => ({ ...c, branch }));

        if (missing.length === 0) return { res: "Already up to date.", type: "info" };

        const mergeCommit = { hash: Math.random().toString(16).substring(2, 8), msg: `Merge branch '${targetB}'`, branch };
        setCommits(prev => [mergeCommit, ...missing, ...prev]);
        return { res: `Updating... Fast-forward.`, type: 'success' };

      case 'push':
        const pushRemote = args[0];
        const pushB = args[1];
        if (pushRemote !== 'origin' || !pushB) return { res: "usage: git push origin <branch>", type: 'error' };
        
        const localToPush = commits.filter(c => c.branch === pushB);
        setRemoteCommits(prev => {
          const remoteHashes = new Set(prev.map(c => c.hash));
          const unique = localToPush.filter(c => !remoteHashes.has(c.hash));
          return [...unique, ...prev];
        });
        return { res: `Pushed to origin/${pushB}`, type: 'success' };

      default:
        return { res: `git: '${sub}' is not a git command.`, type: 'error' };
    }
  }, [isInit, branch, branches, staged, commits, files]);

  return { isInit, branch, branches, staged, commits, remoteCommits, files, execute };
};