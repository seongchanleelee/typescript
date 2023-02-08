### TypeScript



#### why TypeScript

- JavaScript를 이용하지 않고 TypeScript를 이용하는 이유는 타입 안정성 때문
  - 코드 버그의 안정성 + 런타임 에러 안정성 + 생산성

```typescript
// type checker
let b : boolean = false
let c : number[] = []
c.push(1)

let a : string[] = ["1","2"]
```



```typescript
// otional type
const player = {
  name: "seongchan"
}

// player가 name은 갖지만 age는 갖지 않을수도 있는 object를 만들고 싶다면 optiontype에 ?를 넣어줌
const player : {
  name:string,
  age?:number
} = {
  name: "seongchan",
}

// player.age가 undifined일 수 있으므로 틀린 코드
if (player.age < 10) {
  pass
}

// age가 존재하는 지 확인 후 제어문 작성
if (player.age && player.age < 10) {
  
}
```

```typescript
// 반복적인 선언을 방지하고 생산성을 올리는 ts기술 'alias type'
type Age = number;
type Player = {
  name: string,
  age?: Age
}

const seongchan : Player = {
  name: "seongchan"
}
const lynn : Player = {
  name: "lynn",
  age:12
}
```

```typescript
// 함수의 return값의 타입을 지정하는 방법
function playerMaker(name:string):Player {
  return {
    name:name
  }
}

//arrow형태의 ts
const playerMaker = (name:string): Player => ({name})
}

const seongchan = playerMaker("seongchan")
seongchan.age = 28;
```

```typescript
//readonly 기능
// readonly를 바꾸려고 접근해도 바뀌지 않음
type Player = {
  readonly name: Name
  age? Age
}
```

```typescript
//Tuple
// 배열에 들어갈 type들을 순서대로 맞춰 줄 수 있음

const player : [string, number, boolean] = ['seongchan', 1, true]
```

```typescript
//any
//typescript의 보호장치들로부터 빠져나오고 싶을때 사용하는 문법

let a : any[] = [1,2,3,4]
const b : any = true

```

