import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { userDetails: {}};
  }

  componentDidMount() {
    this.getProfileDetails();
   }

  getProfileDetails = async () => {
    try {
      const url = "https://api.github.com/users/tarunbommali";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ userDetails: data });
    } catch (error) {
      console.error("Error fetching profile details:", error);
    }
  };

  render() {
    const { userDetails } = this.state;
    return (
      <div className="flex flex-col items-center py-3">
        <p className="flex justify-center text-center text-xl font-semibold">About</p>
        <div className="text-center">
          {userDetails && userDetails.login && (
            <div className="flex justify-center items-center flex-col">
              <img
                src={userDetails.avatar_url}
                alt="git-profile"
                className="self-center w-[220px] h-[220px] rounded-[50%] my-2 "
              />
              <h1>
                <a
                  href={userDetails.html_url}
                  target="__blank"
                  className="text-xl font-bold text-blue-400 hover:text-orange-400"
                >
                  {userDetails.login}
                </a>
              </h1>
            </div>
          )}
          <p>PUBLIC_REPO: {userDetails.public_repos}</p>
          <p>{userDetails.bio}</p>
        </div>
      </div>
    );
  }
}