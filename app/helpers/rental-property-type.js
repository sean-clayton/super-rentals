import { helper } from '@ember/component/helper';

const communityPropertyTypes = ['Condo', 'Townhouse', 'Apartment']

export const rentalPropertyType = ([propertyType]) => communityPropertyTypes.includes(propertyType) ? 'Community' : 'Standalone'

export default helper(rentalPropertyType);
