// make a request to a backend route which will make API call and then render JSON response accordingly.

export const fetchAgencies = (address1, address2) => {
  $.ajax({
    method: 'GET',
    url: '/api/agencies',
    data: { address1, address2 }
  });
};
