export const fetchItems = () => {
  return $.ajax({
    method: 'get',
    url: 'http://mendo.000webhostapp.com/wp-json/wp/v2/banneritems?fields=id',
  });
};
