import faker from 'faker'

class DataService {
    
    getSalesData() {
        return {
            daily: {
                current: faker.datatype.float({min: 0, max: 1000}),
                goal: faker.datatype.float({min: 0, max: 1000})
            },
            monthly: {
                current: faker.datatype.float({min: 1001, max: 30000}) ,
                goal: faker.datatype.float({min: 1001, max: 30000})
            },
            yearly: {
                current: faker.datatype.float({min: 30000, max: 500000}) ,
                goal: faker.datatype.float({min: 30000, max: 500000})
            }
        }
    }

    getEventData() {
        return {
            training: {
                title: faker.commerce.productName() ,
                // title: faker.hacker.verb(),
                signedUp: faker.datatype.number({min: 0, max: 200})

            }
        }
    }

    getMediaData() {
        return {
            instagram: {
                perPost: {
                    current: faker.datatype.number({min: 0, max: 2000}),
                    goal: faker.datatype.number({min: 900 , max: 1500})
                },
                monthly: {
                    current: faker.datatype.number({min: 2000, max: 35000}) ,
                    goal: faker.datatype.number({min: 20000, max: 30000}),
                },
                likes : {
                    current: faker.datatype.number({min: 0, max: 35000}),
                    past: faker.datatype.number({min: 0, max: 35000}),
                }

            },
            youtube: {
                perVideo: {
                    current: faker.datatype.number({min: 0, max: 2000}),
                    goal: faker.datatype.number({min: 900 , max: 1500})
                },
                monthly: {
                    current: faker.datatype.number({min: 2000, max: 35000}) ,
                    goal: faker.datatype.number({min: 20000, max: 30000}),
                },
                likes : {
                    current: faker.datatype.number({min: 0, max: 35000}),
                    past: faker.datatype.number({min: 0, max: 35000}),
                }
            }
        }
    }

}
const dataService = new DataService()
export default function useData() {
    return dataService
}