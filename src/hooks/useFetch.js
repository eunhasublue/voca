import { useEffect, useState } from "react";

// CRUD
// 1. CRUD하려면 DB를 구축하고 API를 만들어야함
// 2. 그래서, REST API JSON Server를 만듬
//  2-2. 프론트앤드 공부를 하다보면, 제일 번거로운게 api 만드는 것
//  2-3. db 구축하고 api 만드는게 번거롭기 때문에 그럴때 써볼만한게 JSON Server
//  2-4. JSON Server는 REST API 구축을 할 수 있음
// 3. 설치 (명령어 입력)
//  3-1. npm i -g json-server
//  3-2. json server --watch ./src/db/data.json --port 3001

/*
  REST API
  1. URL 주소와 method로 CRUD 요청을 함.
    - Create : POST
    - Read : GET
    - Update : PUT
    - Delete : DELETE 
*/

export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data));
  }, [url]);
  return data;
}
