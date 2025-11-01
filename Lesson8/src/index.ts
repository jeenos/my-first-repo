import { ApiObject } from './apiObject';
import { Laptop, Smartphone, Specifications} from './abstraction';

async function getApiObjectsData(): Promise<ApiObject[]> {
    const response = await fetch('https://api.restful-api.dev/objects');
    const json = await response.json();
    return (json as Record<string, unknown>[]).map((row) => new ApiObject(row));
}

(async () => {
    const apiObjects = await getApiObjectsData();
    const notNullApiObjects = apiObjects.filter((apiObject) => apiObject.data !== null);
    const objectsWithPrice = notNullApiObjects.filter((apiObject) => apiObject.data?.price);
    console.log(objectsWithPrice);

    const apiObjectsSummury = await getApiObjectsData();
    const filteredObjects = apiObjectsSummury.filter((apiObject) => apiObject.hasColor());
    console.log(filteredObjects);

    apiObjectsSummury.forEach((apiObject) => console.log(apiObject.getSummary()));
})();

const phoneSpecs = new Specifications("Black", "128GB", "Apple");
const phone = new Smartphone("1", "iPhone 16 Pro", phoneSpecs);

const laptopSpecs = new Specifications("Silver", "512GB", "Apple");
const laptop = new Laptop("2", "MacBook Pro M5", laptopSpecs);

console.log(phone.getDescription());
phone.turnOn();
console.log(laptop.getDescription());
laptop.turnOn();
