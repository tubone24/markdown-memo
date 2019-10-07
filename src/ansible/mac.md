# Macで使えるAnsible

## Homebrew


```
- name: 'Install pyenv'
  homebrew:
    name: 'pyenv'
    state: 'present'
```

homebrewモジュールを使う。使い方はyumモジュールと同じ
