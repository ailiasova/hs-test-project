import './App.css';
import {useQuery} from "@apollo/client";
import ListItem from "./components/ListItem";
import {CONTINENTS_QUERY} from "./queries";
import {randomJson} from "./utils";


function App() {
  const { loading, error, data } = useQuery(CONTINENTS_QUERY);
  console.log(loading, data);
  if (loading) return <h3>Loading...</h3>
  if (error) return <h3>Ooops...!</h3>

  const numList = randomJson(5,3);


  return (
      <div className="App">

        <h1>Continents list</h1>
        {data.continents.map(({code, name, countries})=> {
          return (
              <ListItem
                  key={code}
                  items={countries.map(({code, languages, name, emoji, ...country}) => {
                    return {
                      ...country,
                      id: code,
                      name: `${name} ${emoji}`,
                      items: languages.map(({code, ...language}) => {
                        return {
                          ...language,
                          id: code,
                        }
                      }),
                    }
                  })}
                  name={name}>
              </ListItem>
          )
        })}

        <h1>Random list: </h1>
        {numList.map(item => {
          return <ListItem
            key={item.id}
            name={item.name}
            items={item.items}
          />
        })}
      </div>
  );
}

export default App;
