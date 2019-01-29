import React, { Component } from 'react'

import './App.css'
import DuckTable from './lib'

const columns = [
    {id: 'id', name: 'id', maxWidth: 300, minWidth: 200},
    {id: 'name', name: 'meno', maxWidth: 300, minWidth: 200},
    {id: 'age', name: 'vek', maxWidth: 300, minWidth: 200}
]

const data = [
    {
        "id": "5c501f5a1a1fed8771435999",
        "age": 37,
        "name": "Lucille"
    },
    {
        "id": "5c501f5a1226fe750704cab2",
        "age": 29,
        "name": "Jacqueline"
    },
    {
        "id": "5c501f5ae9fcfd2b85bff539",
        "age": 22,
        "name": "Savage"
    },
    {
        "id": "5c501f5a31bb9290e525d461",
        "age": 22,
        "name": "Esmeralda"
    },
    {
        "id": "5c501f5a82cafa7e3e85883b",
        "age": 37,
        "name": "Turner"
    },
    {
        "id": "5c501f5aaa79fda7f579452d",
        "age": 30,
        "name": "Fern"
    },
    {
        "id": "5c501f5a91591414d8a92e9e",
        "age": 22,
        "name": "Navarro"
    },
    {
        "id": "5c501f5a2cc2054ebd3977e3",
        "age": 37,
        "name": "Hester"
    },
    {
        "id": "5c501f5aaf40cf2f490b8030",
        "age": 32,
        "name": "Elisa"
    },
    {
        "id": "5c501f5a16ba8778c3eaf41b",
        "age": 30,
        "name": "Foley"
    },
    {
        "id": "5c501f5abb4f93b793b23b43",
        "age": 22,
        "name": "Carter"
    },
    {
        "id": "5c501f5a658c9a713f91e6af",
        "age": 20,
        "name": "Maricela"
    },
    {
        "id": "5c501f5a1a648807db69d084",
        "age": 25,
        "name": "Daniels"
    },
    {
        "id": "5c501f5af01c7182cb450041",
        "age": 23,
        "name": "Lang"
    },
    {
        "id": "5c501f5a69d3a564b37bd019",
        "age": 38,
        "name": "Lora"
    },
    {
        "id": "5c501f5a2bf4d6ea55e082c7",
        "age": 27,
        "name": "Fuentes"
    },
    {
        "id": "5c501f5a33fccf5a88ab5bfb",
        "age": 23,
        "name": "Valenzuela"
    },
    {
        "id": "5c501f5a570d905a6ae8f38a",
        "age": 29,
        "name": "Fisher"
    },
    {
        "id": "5c501f5a82df3091b46cc12d",
        "age": 31,
        "name": "Brandi"
    },
    {
        "id": "5c501f5a5e4eadfe38273181",
        "age": 35,
        "name": "Cleveland"
    },
    {
        "id": "5c501f5aea8eee3b4aef0527",
        "age": 30,
        "name": "Marla"
    },
    {
        "id": "5c501f5a8e9d4791411e18d4",
        "age": 39,
        "name": "Lilia"
    },
    {
        "id": "5c501f5a805908fb4817b3b2",
        "age": 40,
        "name": "Page"
    },
    {
        "id": "5c501f5a7008965c1fcc2364",
        "age": 39,
        "name": "Dillon"
    },
    {
        "id": "5c501f5a930cc8111343e2a1",
        "age": 34,
        "name": "Thelma"
    },
    {
        "id": "5c501f5a2750aa4afb7ee271",
        "age": 39,
        "name": "Barron"
    },
    {
        "id": "5c501f5a2a25803544d463d2",
        "age": 37,
        "name": "Duran"
    },
    {
        "id": "5c501f5a67df47baabf56b7d",
        "age": 39,
        "name": "Callahan"
    },
    {
        "id": "5c501f5a721de32bfdfa8b6a",
        "age": 22,
        "name": "Kelley"
    },
    {
        "id": "5c501f5a41592d7b66afa3e3",
        "age": 20,
        "name": "Walters"
    },
    {
        "id": "5c501f5ae03026fb71159273",
        "age": 21,
        "name": "Dyer"
    },
    {
        "id": "5c501f5a1d199c147f52a29a",
        "age": 25,
        "name": "Reyes"
    },
    {
        "id": "5c501f5a20de3b8179f94ef9",
        "age": 30,
        "name": "Cooke"
    },
    {
        "id": "5c501f5ab88eaabe2e6e7576",
        "age": 21,
        "name": "Carey"
    },
    {
        "id": "5c501f5a293c10c32da1cd72",
        "age": 34,
        "name": "Randolph"
    },
    {
        "id": "5c501f5a902e5deb4845dc76",
        "age": 32,
        "name": "Stout"
    },
    {
        "id": "5c501f5a7c47c311fff541b9",
        "age": 24,
        "name": "Audrey"
    },
    {
        "id": "5c501f5a99d2cef024574381",
        "age": 37,
        "name": "Sondra"
    },
    {
        "id": "5c501f5ad1ba48f278a60dc0",
        "age": 27,
        "name": "Corrine"
    },
    {
        "id": "5c501f5affa3b27dd6aa7d13",
        "age": 40,
        "name": "Jane"
    },
    {
        "id": "5c501f5a19eae60b935b8e45",
        "age": 20,
        "name": "Frankie"
    },
    {
        "id": "5c501f5a45424979517dd3a5",
        "age": 36,
        "name": "Blanche"
    },
    {
        "id": "5c501f5a2c3648b205d94343",
        "age": 37,
        "name": "Zamora"
    },
    {
        "id": "5c501f5ac4b42d1c96fa9b4b",
        "age": 38,
        "name": "Brady"
    },
    {
        "id": "5c501f5ae4cb0c67a0f02284",
        "age": 29,
        "name": "Lena"
    },
    {
        "id": "5c501f5a409aebc669b750f8",
        "age": 30,
        "name": "Riddle"
    },
    {
        "id": "5c501f5a07b1e929fb5e8b9c",
        "age": 31,
        "name": "Mccarty"
    },
    {
        "id": "5c501f5a26ae422c45ef2072",
        "age": 33,
        "name": "Maddox"
    },
    {
        "id": "5c501f5af67f10eafabb6706",
        "age": 24,
        "name": "Moss"
    },
    {
        "id": "5c501f5a54eebea8428b0a06",
        "age": 24,
        "name": "Suzanne"
    },
    {
        "id": "5c501f5af87e1001bf4b9a17",
        "age": 27,
        "name": "Pearson"
    },
    {
        "id": "5c501f5a088607252179c1eb",
        "age": 38,
        "name": "Stevens"
    },
    {
        "id": "5c501f5a818dcb02d16aa632",
        "age": 24,
        "name": "Dominguez"
    },
    {
        "id": "5c501f5a550aed9c9da9d2bd",
        "age": 29,
        "name": "Bauer"
    },
    {
        "id": "5c501f5ac03b5c8ab0c00680",
        "age": 24,
        "name": "Mccullough"
    },
    {
        "id": "5c501f5aeef199d4cb821c09",
        "age": 33,
        "name": "Mccray"
    },
    {
        "id": "5c501f5a13a7a99b8e1625fd",
        "age": 29,
        "name": "Lynch"
    },
    {
        "id": "5c501f5a66df2797d1b32704",
        "age": 38,
        "name": "Luella"
    },
    {
        "id": "5c501f5a0b02b130ab79683d",
        "age": 35,
        "name": "Erika"
    },
    {
        "id": "5c501f5add9625d480beb9ff",
        "age": 30,
        "name": "Ratliff"
    },
    {
        "id": "5c501f5ad3bd013c4c6bc0e5",
        "age": 25,
        "name": "Margery"
    },
    {
        "id": "5c501f5a1f6ba25985ff3de2",
        "age": 33,
        "name": "Richmond"
    },
    {
        "id": "5c501f5a238016c2e95f0ff7",
        "age": 35,
        "name": "Simmons"
    },
    {
        "id": "5c501f5a3a86e88fd88761b9",
        "age": 20,
        "name": "Kerri"
    },
    {
        "id": "5c501f5a8c8c81bf34779dd6",
        "age": 31,
        "name": "James"
    },
    {
        "id": "5c501f5a249c7a5751939281",
        "age": 29,
        "name": "Snyder"
    },
    {
        "id": "5c501f5a40a0caab43fa3529",
        "age": 20,
        "name": "Gay"
    },
    {
        "id": "5c501f5a44944eacacc58886",
        "age": 29,
        "name": "Kirby"
    },
    {
        "id": "5c501f5a2c32ed8bb5df430a",
        "age": 29,
        "name": "Battle"
    },
    {
        "id": "5c501f5a262b17f982048202",
        "age": 31,
        "name": "Abigail"
    },
    {
        "id": "5c501f5a2254c80ce3bbc84e",
        "age": 22,
        "name": "Hudson"
    },
    {
        "id": "5c501f5a8661c650a672eb1a",
        "age": 39,
        "name": "Eva"
    },
    {
        "id": "5c501f5a52ea96fa53a8d81a",
        "age": 37,
        "name": "Ginger"
    },
    {
        "id": "5c501f5aba5b35846fa5517a",
        "age": 25,
        "name": "Robinson"
    },
    {
        "id": "5c501f5a5b0d36514bdb9c8f",
        "age": 32,
        "name": "Leanna"
    },
    {
        "id": "5c501f5a15c648140fd886e2",
        "age": 23,
        "name": "Brown"
    },
    {
        "id": "5c501f5acb8f544e09f42c96",
        "age": 35,
        "name": "Darla"
    },
    {
        "id": "5c501f5a2d0bfdfdf679babe",
        "age": 34,
        "name": "Roberts"
    },
    {
        "id": "5c501f5aeae93191899ed8a6",
        "age": 37,
        "name": "Beverley"
    },
    {
        "id": "5c501f5a082d3ee23071ba89",
        "age": 39,
        "name": "Rowe"
    },
    {
        "id": "5c501f5a074674cc2ffc32d7",
        "age": 31,
        "name": "Jean"
    },
    {
        "id": "5c501f5a223b7d2b37425faa",
        "age": 37,
        "name": "Lauren"
    },
    {
        "id": "5c501f5ac89f607edfea32cf",
        "age": 37,
        "name": "Steele"
    },
    {
        "id": "5c501f5a65f6bb4b2a7ed4c5",
        "age": 26,
        "name": "Lillian"
    },
    {
        "id": "5c501f5a8b15f81d69ed36ca",
        "age": 20,
        "name": "Sullivan"
    },
    {
        "id": "5c501f5a9f21cbeb00934813",
        "age": 37,
        "name": "Ayers"
    },
    {
        "id": "5c501f5acd3711ead9bc26a3",
        "age": 37,
        "name": "Claudette"
    },
    {
        "id": "5c501f5aae3916aae43331c7",
        "age": 30,
        "name": "Zimmerman"
    },
    {
        "id": "5c501f5af5741d0ee7861455",
        "age": 33,
        "name": "Lindsay"
    },
    {
        "id": "5c501f5a7a0aea7c3371015d",
        "age": 28,
        "name": "Benita"
    },
    {
        "id": "5c501f5abadcf27ed403bbeb",
        "age": 34,
        "name": "Sherry"
    },
    {
        "id": "5c501f5a20fec65a29ddeb09",
        "age": 38,
        "name": "Lea"
    },
    {
        "id": "5c501f5a33d7fc6ed16fee24",
        "age": 39,
        "name": "Alyson"
    },
    {
        "id": "5c501f5ac764279523b37ffb",
        "age": 39,
        "name": "Cohen"
    },
    {
        "id": "5c501f5a8c98f3974ffb07f8",
        "age": 26,
        "name": "Nancy"
    },
    {
        "id": "5c501f5ada58faeafcf99fcd",
        "age": 31,
        "name": "Paige"
    },
    {
        "id": "5c501f5a3dcfe1a0bf68feba",
        "age": 31,
        "name": "Lawrence"
    },
    {
        "id": "5c501f5acd1791e72664f54b",
        "age": 25,
        "name": "Riggs"
    },
    {
        "id": "5c501f5a3fa38a622e77c359",
        "age": 27,
        "name": "Mcguire"
    },
    {
        "id": "5c501f5a4ecb00e8e9c18ba8",
        "age": 20,
        "name": "Velez"
    }
]


class App extends Component {
  render() {
    return (
      <div className="app">
        <DuckTable columns={columns} data={data} maxHeight="300px" />
      </div>
    )
  }
}

export default App
