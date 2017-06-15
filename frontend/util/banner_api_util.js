const params = [
  "id",
  "title",
  "better_featured_image.source_url"
].join(',');

const url = "http://mendo.000webhostapp.com/wp-json/wp/v2/bannerelement?fields=";

export const fetchItems = () => {
  return $.ajax({
    method: 'get',
    url: `${url}${params}`,
    type: 'jsonp'
  });
};
