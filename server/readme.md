# Server

## Sobre
Api Restful feita com node + typescript, usando o sqlite como banco de dados, é a ORM prisma

## 💻 Pré-requisitos


[![My Skills](https://skillicons.dev/icons?i=nodejs)](https://nodejs.dev/en/)
[![My Skills](https://skillicons.dev/icons?i=ts)](https://www.typescriptlang.org/)
[![My Skills](https://skillicons.dev/icons?i=prisma)](https://www.prisma.io/)


## 🚀 Instalando

### inicie o gerenciador de pacotes

``` javascript
npm init
// ou
yarn init
```

### instale as dependecias

``` javascript
npm install
// ou
yarn
```

### Inicie o prisma

``` javascript
npx prisma migrate dev -init
```

### Rode o server

``` javascript
npm run dev
// ou
yarn dev
```

### Rode o prisma studio

``` javascript
npx prisma studio 
```


## ☕ Rotas

## Card

<br>
<h3><span style="color: purple">GET</span> <spann style="color: orange">/card</span> <span style="color: red">(Need Token)</span></h3>

Response
``` typescript
[
  {
    id: string
    accountId: string
    categoryName: string
    title: string
    cardBody: [
      {
        name: string
        placeholder: string
        value: string
      }
    ]
    createdAt: string
  }
]
```

<h3><span style="color: purple">GET</span> <spann style="color: orange">/card/:id</span> <span style="color: red">(Need Token)</span></h3>

Response
``` typescript
  {
    id: string
    accountId: string
    categoryName: string
    title: string
    cardBody: [
      {
        name: string
        placeholder: string
        value: string
      }
    ]
    createdAt: string
  }
```

<h3><span style="color: green">Post</span> <spann style="color: orange">/card</span> <span style="color: red">(Need Token)</span></h3>
Request

``` typescript
{
	title: string
  categoryName: string
	cardBody:[
		{
			value: string
		}
	]
}
```

Response

``` typescript
{
  id: string
  accountId: string
  categoryName: string
  title: string
    cardBody: string
  createdAt: string
}
```


<h3><span style="color: #d75413">Put</span> <spann style="color: orange">/card/:id</span> <span style="color: red">(Need Token)</span></h3>
Request

``` typescript
{
	title: string,
	cardBody:[
		{
			value: string
		}
	]
}
```

Response

``` typescript
{
  id: string
  accountId: string
  categoryName: string
  title: string
    cardBody: [
      {
        name: string
        placeholder: string
        value: string
      }
    ]
  createdAt: string
}
```

<h3><span style="color: red">Delete</span> <spann style="color: orange">/card/:id</span> <span style="color: red">(Need Token)</span></h3>

``` typescript
  No body returned 
```

## Category

<br>
<h3><span style="color: purple">GET</span> <spann style="color: orange">/category</span></h3>

Response
``` typescript
[
  {
		id: string
		name: string
		templateName: string
		createdAt: string
		_count: {
			Card: number
		}
	}
]
```

<h3><span style="color: purple">GET</span> <spann style="color: orange">/category/:id</span></h3>

Response
``` typescript
{
	id: string
	name: string
	templateName: string
	createdAt: string
	_count: {
		Card: number
	}
}
```

<h3><span style="color: green">Post</span> <spann style="color: orange">/category</span></h3>
Request

``` typescript
{
	name: string
	templateName: string
}
```

Response

``` typescript
{
	id: string
	name: string
	templateName: string
	createdAt: string
}
```


<h3><span style="color: #d75413">Put</span> <spann style="color: orange">/category/:id</span></h3>
Request

``` typescript
{
	name: string
}
```

Response

``` typescript
{
	id: string
	name: string
	templateName: string
	createdAt: string
}
```

<h3><span style="color: red">Delete</span> <spann style="color: orange">/category/:id</span> </h3>

``` typescript
  No body returned 
```

## Authenticate

<br>
<h3><span style="color: green">Post</span> <spann style="color: orange">/login</span></h3>
Request

``` typescript
{
	email: string
  password: string
}
```

Response
``` typescript
{
  token: string
}
```

<h3><span style="color: purple">Get</span> <spann style="color: orange">/account</span> <span style="color: red">(Need Token)</span></h3>

Response

``` typescript
{
	id: string
	email: string
	name: string
	password: string
	_count: {
		Card: number
	}
}
```

## Template

<br>
<h3><span style="color: purple">GET</span> <spann style="color: orange">/template</span></h3>

Response
``` typescript
[
	{
		id: string
		name: string
		templateBody: [
			{
				name: string
				placeholder: string
			}
		]
		createdAt: string
		Category: [
			{
				name: string
			}
		]
	}
]
```

<h3><span style="color: purple">GET</span> <spann style="color: orange">/template/:id</span></h3>

Response
``` typescript
{
	id: string
	name: string
	templateBody: [
		{
			name: string
			placeholder: string
		}
	]
	createdAt: string
	Category: [
		{
			name: string
		}
	]
}

```

<h3><span style="color: green">Post</span> <spann style="color: orange">/template</span></h3>
Request

``` typescript
{
	name: string
	templateName: string
}
```

Response

``` typescript
{
	name: string
	templateBody:[
		{
		  name: string
			placeholder: string
		}
	]
}
```