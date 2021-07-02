/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
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
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
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
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
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
