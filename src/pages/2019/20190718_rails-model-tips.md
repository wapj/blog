---
title: "레일즈의 ActiveRecord 모델팁들"
date: 2019-07-18
---

## 모델에서 하나의 속성만 뽑아내서 리스트로 만들고 싶은 경우

`pluck` 을 사용하면 된다. 

ex) 

```
groups = Group.where(name like '%#{keyword}%')
gruops.pluck(:id)

------------------------
output
------------------------
=> [1,2,3,4,5,6]
```
