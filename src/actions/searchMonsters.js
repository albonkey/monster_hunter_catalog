import axios from 'axios';
const base_url = 'https://mhw-db.com';
const listMonsters = async (name, species, location) => {
  try{
    const url = `${base_url}/monsters?q={"name": {"$like":"${name}%"},"species": {"$like":"${species}%"}}`;
    console.log(url);
    const {data} = await axios.get(url);

    return data;
  } catch(error){
    console.log(error);
  }

}
const getMonster = async (monster_id) => {
  try{
    const url = `${base_url}/monsters/${monster_id}`;
    const {data} = await axios.get(url);

    return data;
  } catch(error){
    console.log(error);
  }
}

export { getMonster, listMonsters };
