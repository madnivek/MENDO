const params = [
  "id",
  "title",
  "better_featured_image.source_url",
  "content.rendered"
].join(',');

const url = "http://mendo.000webhostapp.com/wp-json/wp/v2/product?fields=";

export const fetchProducts = () => {
  return $.ajax({
    method: 'get',
    url: `${url}${params}&per_page=100`
  });
};
