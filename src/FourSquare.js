import config from '../config.json';

class FourSquare {

  async makeRequest() {
    const postFix = Object.keys(config).map(key => `${key.toLowerCase()}=${config[key]}`).join('&');
    const resp = await fetch('https://api.foursquare.com/v2/venues/40a55d80f964a52020f31ee3?' + postFix + '&v=20170521');
    return await resp.json();
  }

}

export default new FourSquare();
