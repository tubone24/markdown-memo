# Macで使えるAnsible

## Homebrew


```
- name: 'Install pyenv'
  homebrew:
    name: 'pyenv'
    state: 'present'
```

homebrewモジュールを使う。使い方はyumモジュールと同じ

[公式Doc](https://docs.ansible.com/ansible/latest/modules/homebrew_module.html)
