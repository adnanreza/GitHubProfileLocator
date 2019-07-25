class GitHub {
  constructor() {
    this.client_id = "Iv1.5c16e2308ea9c73c";
    this.client_secret = "2f86245b3144e580c07e043a8316f7a2772a54cc";
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
