/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
      id
      unitNum
      streetNum
      streetName
      suburb
      city
      postCode
      state
      country
      bedrooms
      bathrooms
      guestPerBedroom
      propertyType
      placeType
      status
      title
      description
      photos
      minimumStay
      cancellationPolicy
      paymentPolicy
      createdAt
      updatedAt
    }
  }
`;
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        unitNum
        streetNum
        streetName
        suburb
        city
        postCode
        state
        country
        bedrooms
        bathrooms
        guestPerBedroom
        propertyType
        placeType
        status
        title
        description
        photos
        minimumStay
        cancellationPolicy
        paymentPolicy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
