# Token-API

API end-point in node js for interaction with erc token

## for production

```
npm start
```

### end points

###creatinfg a erc 20 token - parameters
{
"name": "token name",
"symbol": "token symbol",
"decimals":decimal in number,
"totalSupply": total supply in number
}

```
base_uri//erc20/deploy
```

#ERC721

###creatinfg a erc 721 token - parameters
{
"name": "token name",
"symbol": "token symbol",
"decimals":decimal in number,
}

```
base_uri/erc721/deploy
```

### minting a erc 721 token - parameters

{
"contract_address" : "0xC56f30A0D231635214ab4009d81e3CB22DbE0a8F",
"to": "0xea6ffc68F07322eF222b3904b9C34C38fD9E245f",
"tokenId":"3",
"tokenURI":"123"
}

```
base_uri/erc721/mint
```

### get balance of user a erc 721 token - parameters

{
"contract_address" : "0xC56f30A0D231635214ab4009d81e3CB22DbE0a8F",
"address": "0x8F98d68a1b1994584B1AA00751F5dE2DDa60E4d4"
}

```
base_uri/erc721/balanceOf
```

#securedToken

###creatinfg a erc 721 token - parameters
{
"name": "SAM",
"symbol": "SJ",
"decimals":18,
"totalSupply": 10000,
"manager" : "0x8F98d68a1b1994584B1AA00751F5dE2DDa60E4d4",
"owner": "0x8F98d68a1b1994584B1AA00751F5dE2DDa60E4d4",
"resolver": "0x8F98d68a1b1994584B1AA00751F5dE2DDa60E4d4"
}

```
base_uri/securedToken/deploy
```

## For development run

```
npm run dev
```
