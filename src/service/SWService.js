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

  getAllCharacters(str) {
     return this.getResourse(`people/?search=${str}`)
  }

  getCharacter(id){
    return this.getResourse(`people/${id}`)
  }

}