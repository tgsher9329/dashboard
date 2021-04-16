import faker from 'faker'

class DataService {

videoTitles = ["title", "title2", "title 3"]
    
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
            },
            videos: [
                getVideo(), getVideo(), getVideo(), getVideo(), getVideo(), getVideo(), getVideo(), getVideo(), getVideo(), getVideo(), 
            ],

            // youtubeDetail : {
            //     index: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            //     videoTitles : [faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName()],
            //     description: [faker.commerce.productDescription(), faker.commerce.productDescription(), faker.commerce.productDescription(), faker.commerce.productDescription(), faker.commerce.productDescription(), faker.commerce.productDescription(), faker.commerce.productDescription(), faker.commerce.productDescription(), faker.commerce.productDescription(), faker.commerce.productDescription(),],
            //     views: [faker.datatype.number({min: 0, max: 500000}), faker.datatype.number({min: 0, max: 500000}), faker.datatype.number({min: 0, max: 500000}), faker.datatype.number({min: 0, max: 500000}), faker.datatype.number({min: 0, max: 500000}), faker.datatype.number({min: 0, max: 500000}), faker.datatype.number({min: 0, max: 500000}), faker.datatype.number({min: 0, max: 500000}), faker.datatype.number({min: 0, max: 500000}), faker.datatype.number({min: 0, max: 500000}),],
            // }
        }
    }

}

function getVideo(){
    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        views: faker.datatype.number({min: 0, max: 500000}),
    }
}

const dataService = new DataService()
export default function useData() {
    return dataService
}