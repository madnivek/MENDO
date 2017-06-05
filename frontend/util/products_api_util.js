export const fetchProducts = () => {
  return $.ajax({
    method: 'get',
    url: 'http://mendo.000webhostapp.com/wp-json/wp/v2/product?fields=id,title.rendered,better_featured_media.source_url',
  });
};
