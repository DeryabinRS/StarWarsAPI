export default class SWService{
  constructor(){
    this._apiBase = 'https://swapi.dev/api/'
  }

  async getResourse(url){
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok){
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }

  async getHomeworld(url){
    const res = await fetch(`${url}`);
    if(!res.ok){
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }
  
  getAllCharacters(page = 1) {
     return this.getResourse(`people/?page=${page}`)
  }

  getCharacter(str){
    return this.getResourse(`people/?search=${str}`)
  }

}