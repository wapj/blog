---
title: "파이썬 패키지 관리툴 poetry 소개"
date: "2020-06-04"
tags: ["python", "poetry"]
category: "dev"
published: false
---

## poetry 소개

`poetry`는 파이썬 의존성 관리 툴입니다.
단순하게 의존성 관리만 잘하는 툴이라면 추천할 이유가 별로 없을 것입니다. `poetry`는 단순하게 잘 한다 정도를 넘어서서 매우 잘 지원 해줍니다. `poetry.lock`을 사용해서 프로젝트의 의존성을 다른 환경에서도 동일하게 유지할 수 있고, 각 환경에서의 자동완성도 꽤나 잘 지원합니다.

또한, 기존 파이썬 패키지 관리 툴에서 볼 수 없었던, `build`와 `publish`까지 지원해주고 있어서, 실제로 프로젝트를 만들고 저장소에 배포까지 하고자 하는 사람에게는 굉장히 좋은 도구라고 생각됩니다.

깃헙의 [python-poetry](https://github.com/python-poetry) 라는 계정에서 관리되는데, poetry 하나를 위해서 따로 만든 프로젝트가 있을 정도로 꽤나 정성스럽게 만든 프로젝트입니다.

또한 사용법도 기존에 npm을 사용해 본적이 있다면 아주 친숙한 명령어들로 구성되어 있습니다.

단점이라면 새로 커맨드를 익혀야 하는 문제가 있으며, 기존의 프로젝트에 적용하기에는 약간 부담스러울 수 있다는 것입니다.

개인적으로는 새로만드는 프로젝트라면 주저없이 `poetry`를 써보라고 추천하고 싶습니다.

본 문서는 `poetry`의 설치 및 기본적인 사용법을 정리해서 조금이라도 많은 분이 좋은 프로젝트 환경을 구축하도록 돕기위한 글입니다. 시간이 지나면 본 문서의 내용과 달라질 수 있으므로 최대한 [공식 사이트의 문서](https://python-poetry.org/docs) 를 참고하도록 합시다.

## 설치

### 리눅스에서 설치 하기

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python
```

### pip 로 설치

```bash
pip install --user poetry
```

설치를 하게되면 `poetry` 명령이 설치됩니다.
`poetry` 명령어는 `$HOME/.poetry/bin` 에 저장되는데,
`PATH` 환경 변수에도 추가가 됩니다. 추가가 되지 않았다면,
`.bash_profile` 등의 파일에 `PATH` 의 환경변수에 추가해주세요.

패스에 추가하지 않고 바로 사용하려면 아래 명령어를 입력해주세요.

```bash
source $HOME/.poetry/env
```

### 탭완성(tab completion) 활성화하기

`poetry` 는 Bash, Fish, Zsh 에서 탭완성을 지원합니다.
`poetry help completions` 명령어를 사용하면 각 쉘환경별 도움말을 확인할 수 있습니다.

귀찮으시면 아래 커맨드들을 확인하시면 됩니다.

```bash
# Bash
poetry completions bash > /etc/bash_completion.d/poetry.bash-completion

# Bash (Homebrew)
poetry completions bash > $(brew --prefix)/etc/bash_completion.d/poetry.bash-completion

# Fish
poetry completions fish > ~/.config/fish/completions/poetry.fish

# Fish (Homebrew)
poetry completions fish > (brew --prefix)/share/fish/vendor_completions.d/poetry.fish

# Zsh
poetry completions zsh > ~/.zfunc/_poetry

# Zsh (Homebrew)
poetry completions zsh > $(brew --prefix)/share/zsh/site-functions/_poetry

# Zsh (Oh-My-Zsh)
mkdir $ZSH/plugins/poetry
poetry completions zsh > $ZSH/plugins/poetry/_poetry

# Zsh (prezto)
poetry completions zsh > ~/.zprezto/modules/completion/external/src/_poetry
```

> `zsh` 에서는 ~/.zshrc `compinit` 앞에 `fpath+=~/.zfunc` 을 추가해줍니다.

> `oh-my-zsh` 에서는 ~/.zshrc 의 plugins에 poetry 를 추가해줘야 합니다.

```bash
plugins(
    poerty
    ...
)
```

## 간단 사용법

### 프로젝트 셋업

```bash
poetry new my-project
```

위의 명령으로 프로젝트를 생성하면 아래와 같은 구조의 프로젝트가 생성됩니다.

```bash
my-project tree
.
├── README.rst
├── my_project
│   └── __init__.py
├── pyproject.toml
└── tests
    ├── __init__.py
    └── test_my_project.py
```

위에 보이는 `pyproject.toml` 파일이 바로 의존성을 관리하는 파일입니다.
열어보면 아래와 같이 생겼습니다.

```toml
[tool.poetry]
name = "my-project"
version = "0.1.0"
description = ""
authors = ["andy.sg"]

[tool.poetry.dependencies]
python = "^3.8"

[tool.poetry.dev-dependencies]
pytest = "^5.2"

[build-system]
requires = ["poetry>=0.12"]
build-backend = "poetry.masonry.api"
```

의존성은 `[tool.poetry.dependencies]` 와 `[tool.poetry.dev-dependencies]` 에서 관리하고 있습니다. 의존성을 추가하고 싶다면 `add` 서브 커맨드를 사용하면 됩니다. 장고를 한번 추가해보도록 하겠습니다.

```bash
$ poetry add django
```

아래와 같이 출력이 나오게 됩니다.

```bash
Using version ^3.0.7 for django

Updating dependencies
Resolving dependencies... (7.1s)

Writing lock file


Package operations: 1 install, 9 updates, 0 removals

  - Updating pyparsing (2.4.6 -> 2.4.7)
  - Updating six (1.13.0 -> 1.15.0)
  - Installing asgiref (3.2.7)
  - Updating more-itertools (8.1.0 -> 8.3.0)
  - Updating packaging (20.1 -> 20.4)
  - Updating pytz (2019.3 -> 2020.1)
  - Updating sqlparse (0.3.0 -> 0.3.1)
  - Updating wcwidth (0.1.8 -> 0.2.3)
  - Updating django (2.2.9 -> 3.0.7)
  - Updating pytest (5.3.5 -> 5.4.3)
```

`Writing lock file` 에서 생성되는 파일이 바로 `poetry.lock` 파일인데,
`poetry.lock` 파일이 있으면 내가 작성하고 있는 프로젝트의 의존성과 완전히 동일한 의존성을 가지도록 할 수 있습니다. 그러니 `poetry.lock` 파일을 꼭 저장소에 커밋 하도록 합시다.

`pyproject.toml` 을 보면 아래와 같이 django 의존성이 추가되어 있습니다.

```bash
[tool.poetry.dependencies]
python = "^3.8"
django = "^3.0.7"
```

### 버전 제약사항

django 의존성 설정을 보면 `"^3.0.7"` 이라고 되어 있습니다. 여기서 `^(캐럿)` 의 의미는 ( >= 3.0.7, < 4.0.0) 의 의미입니다. 즉 `3.9999....99999` 버전까지도 설치가 된다는 얘기입니다.

[의존성 스펙](https://python-poetry.org/docs/dependency-specification/) 문서를 보면 좀더 자세히 나와 있습니다.

## 의존성을 최신으로 업데이트하기

아래의 커맨드를 입력하면 됩니다.
`$ poetry update`

위 커맨드는 `poetry.lock` 파일을 삭제후 `poetry install` 하는 것과 동일합니다.

## 패키징

poerty를 사용해서 `tarball` `wheel` 같은 배포가 가능한 파일로 빌드할 수 있습니다.

```bash
poerty build
```

위에서 만든 my-project 에서 실행하면 아래와 같이 나옵니다.

```bash
Building my-project (0.1.0)
 - Building sdist
 - Built my-project-0.1.0.tar.gz

 - Building wheel
 - Built my_project-0.1.0-py3-none-any.whl
```

실행후 `dist` 디렉토리에 가보면 아래와 같이 압축된 파일들이 있습니다.

```bash
my-project-0.1.0.tar.gz
my_project-0.1.0-py3-none-any.whl
```

## PyPI 에 배포하기

아래 명령어로 PyPI에 배포할 수 있습니다.

```bash
poerty publish
```

배포를 하려면 PyPI 계정이 필요합니다.
계정이 없다면 [여기를 클릭](https://pypi.org/account/register/) 하시고 하나 만드셔도 좋습니다.
프로젝트명이 겹치면 배포를 할 수 없으니, 자신만의 독특한 프로젝트 명을 정해서 배포를 해보도록 합시다.

## 명령어들

### init

`init` 커맨드는 `pyproject.toml` 파일을 인터렉티브 하게 만들 수 있도록 도와줍니다.

### install

### update

### add

### remove

### show

### build

### config

### run

### shell

### check

### search

### lock

### export

## 가상 환경 관리하기

poetry 로 가상환경(virtualenv)을 관리 할 수 있습니다.

일반적으로 아래와 같이 사용합니다.

```bash
$ poetry env use {파이썬경로}
```

만약에 python3 이 패스에 잡혀 있는 상황이라면 모든 경로를 적어주지 않아도 됩니다.

```bash
$ poetry env use python3
```

### 가상환경 정보보기

`poetry env info` 커맨드로 환경 정보를 확인할 수 있습니다.

저의 경우는 아래와 같이 출력되었습니다.

```bash
Virtualenv
Python:         3.8.1
Implementation: CPython
Path:           /Users/gyus/Library/Caches/pypoetry/virtualenvs/my-project-0CozYJQl-py3.8
Valid:          True

System
Platform: darwin
OS:       posix
Python:   /Users/gyus/.pyenv/versions/3.8.1
```

단순하게 가상환경의 path만 알고 싶은 경우라면 `--path` 옵션을 주면 됩니다.

```bash
$ poetry env info --path
```

### 가상환경 리스트 보기

만들어진 가상환경의 리스트는 아래의 명령어로 확인 가능합니다.

```bash
$ poetry env list
```

### 가상환경 삭제하기

삭제는 아래의 명령어로 가능합니다.

```bash
$ poetry env remove {python경로}
```
