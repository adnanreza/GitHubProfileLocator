class GitHub {
  constructor() {
    this.client_id = "Iv1.5c16e2308ea9c73c";
    this.client_secret = "af2e7dbc179f04af860f4926b7e4a2a1698a99d1";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id?=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
