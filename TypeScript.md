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

```typescript
// api로부터 응답을 받는데 응답의 타입을 모른다면
//unknown

// 응답으로 받는 a 가 무었일지 모르니 unknown을 이용하여 일종의 ts만의 보호를 함
let a:unknown;

//a 가 number type 이라면
if(typeof a ==='number'){
  let b = a + 1
}

// a 가 string type 이라면
if(typeof a ==='string'){
  let b = a.toUpperCase();
}
```

```typescript
// void
// void는 아무것도 return 하지 않는 함수를 대상으로 사용!
// 보통 void는 따로 선언하지 않음 ts에서 아무것도 return 하지 않는걸 자동으로 인식

function hello() {
  console.log('x')
}
```

```typescript
//never
//함수가 절대 return하지 않을 때 발생!

// return 하지 않고 오류를 발생시키는 함수
function hello(): never{
  throw new Error("xxx")
}

//또한 never는 타입이 두가지 일 수도 있는 상황에 발생할 수 있음
function hello(name:string|number){
  if(typeof name ==='string') {
    
  } else if (typeof name ==='number') {
    
  } else{
    // 이때 name은 never라는 type을 가짐
    name
  }
}
```



#### call signatures

```typescript
function add (a:number, b:number) {
  return a + b
}

const add = (a:number, b:number) => a+b

// call signature
// 먼저 함수의 타입을 설명하고 코드를 구현하게끔 하는 장점이 있음
type Add = (a:number, b:number) => number;

const add:Add = (a, b) => a + b
```



- polymorphism(다형성)


##### overloading

```typescript
// 나쁜 예시
type Add = {
  (a: number, b: number): number
  (a: number, b: string): number
}

const add: Add = (a, b) => {
  if(typeof b === 'string') return a
  return a + b
}
```



- 오버로딩은 여러 call signatures가 있는 함수일 뿐

```typescript
type Config = {
  path: string,
  state: object
}

type Push = {
  (path:string):void
  (config: Config):void
}

const push: Push = (config) => {
  if(typeof config === 'string') {
    console.log(config)
  } else {
    console.log(config.path)
  }
}
```

```
// 파라미터의 갯수가 다를때 일어나는 것

type Add = {
  (a:number, b:number): number
  (a:number, b:number, c:number): number
}

// 잘못된 예시
// c를 인자값으로 가져왔음에도 c가 선언되지 않았기에 c의 타입을 모름
// c는 옵션값이라는걸 인지 시켜줘야함
const add:Add = (a, b, c) => {
  return a + b
}

// 잘된 예시
// c?: number ==> c는 아마 숫자일 것이다.
const add:Add = (a, b, c?:number) => {
  return a + b
}
```

