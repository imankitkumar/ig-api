const fetch = require('got');


const data = async (url) => {

  const response = await fetch(`${url}?__a=1`);

  const json = JSON.parse(response.body);

  return {

    "pic_url": `${json.graphql.shortcode_media.display_url}&dl=1`,
    "video_link": `${json.graphql.shortcode_media.video_url}&dl=1`
  
};

};

module.exports = {

  data: data

}
