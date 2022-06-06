import "./about.scss";


/*****************GrapgQl*******************/
// https://www.youtube.com/watch?v=BkecWwcLYuk&ab_channel=Contentful
// https://codesandbox.io/s/6j2z03p76k?file=/src/index.js:101-407

// ⬇⬇⬇⬇ test graphql Online ⬇⬇⬇⬇
// // https://graphql.contentful.com/content/v1/spaces/qsose1xd63wa/explore?access_token=SVgVyebXkcCkniau_rnQw1cGDD8ifmrV1CSqc6d53Wo
// 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧
const ourStoryContent = document.querySelector(".our-story .content")
const ourServicesContent = document.querySelector(".our-services .content")
const ourMissionContent = document.querySelector(".our-mission .content")
const accessToken = "SVgVyebXkcCkniau_rnQw1cGDD8ifmrV1CSqc6d53Wo";
const spaceId = "qsose1xd63wa";

const query = `
{
  aboutCollection{
    items{
      ourStory
      ourServicesAndBenefits
      ourMission
    }
  }
  }
`;
fetch(
  `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      query,
    }),
  }
)
  .then((res) => res.json())
  .then((response) => {
    // [{extract from array > extract from object}]
    const [{ourStory,ourServicesAndBenefits,ourMission}] = response.data.aboutCollection.items

    ourStoryContent.innerText = ourStory;
    ourServicesContent.innerText = ourServicesAndBenefits;
    ourMissionContent.innerText = ourMission;
    
    
  })
  .catch((error) => {
    console.log("error: ", error);
  });


/*****************GrapgQl*******************/
