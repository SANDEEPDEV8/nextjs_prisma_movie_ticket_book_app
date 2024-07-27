import { faker } from '@faker-js/faker'

import { prisma } from '../src/utils/client'
import config from '../src/config/default'

const feedSomeData = async (length: number) => {
	try {
		// Seed Cities
		await prisma.city.createMany({
			data: [
				{ CityID: 1, Name: 'New York', State: 'NY', ZipCode: '10001' },
				{ CityID: 2, Name: 'Los Angeles', State: 'CA', ZipCode: '90001' },
				{ CityID: 3, Name: 'Chicago', State: 'IL', ZipCode: '60601' },
				{ CityID: 4, Name: 'Houston', State: 'TX', ZipCode: '77001' },
				{ CityID: 5, Name: 'Phoenix', State: 'AZ', ZipCode: '85001' },
				{ CityID: 6, Name: 'Philadelphia', State: 'PA', ZipCode: '19101' },
				{ CityID: 7, Name: 'San Antonio', State: 'TX', ZipCode: '78201' },
				{ CityID: 8, Name: 'San Diego', State: 'CA', ZipCode: '92101' },
				{ CityID: 9, Name: 'Dallas', State: 'TX', ZipCode: '75201' },
				{ CityID: 10, Name: 'San Jose', State: 'CA', ZipCode: '95101' },
			],
			skipDuplicates: true,
		})

		// Seed Cinemas
		await prisma.cinema.createMany({
			data: [
				{
					CinemaID: 1,
					Name: 'Cineplex in New York',
					TotalCinemaHalls: 8,
					CityID: 1,
				},
				{
					CinemaID: 2,
					Name: 'Cineplex in Los Angeles',
					TotalCinemaHalls: 6,
					CityID: 2,
				},
				{
					CinemaID: 3,
					Name: 'Cineplex in Chicago',
					TotalCinemaHalls: 5,
					CityID: 3,
				},
				{
					CinemaID: 4,
					Name: 'Cineplex in Houston',
					TotalCinemaHalls: 7,
					CityID: 4,
				},
				{
					CinemaID: 5,
					Name: 'Cineplex in Phoenix',
					TotalCinemaHalls: 4,
					CityID: 5,
				},
				{
					CinemaID: 6,
					Name: 'Cineplex in Philadelphia',
					TotalCinemaHalls: 8,
					CityID: 6,
				},
				{
					CinemaID: 7,
					Name: 'Cineplex in San Antonio',
					TotalCinemaHalls: 5,
					CityID: 7,
				},
				{
					CinemaID: 8,
					Name: 'Cineplex in San Diego',
					TotalCinemaHalls: 6,
					CityID: 8,
				},
				{
					CinemaID: 9,
					Name: 'Cineplex in Dallas',
					TotalCinemaHalls: 7,
					CityID: 9,
				},
				{
					CinemaID: 10,
					Name: 'Cineplex in San Jose',
					TotalCinemaHalls: 4,
					CityID: 10,
				},
			],
			skipDuplicates: true,
		})

		// Seed Cinema Halls
		await prisma.cinema_Hall.createMany({
			data: [
				{
					CinemaHallID: 1,
					Name: 'Hall 1 at Cineplex in New York',
					TotalSeats: 100,
					CinemaID: 1,
				},
				{
					CinemaHallID: 2,
					Name: 'Hall 2 at Cineplex in New York',
					TotalSeats: 100,
					CinemaID: 1,
				},
				{
					CinemaHallID: 3,
					Name: 'Hall 1 at Cineplex in Los Angeles',
					TotalSeats: 100,
					CinemaID: 2,
				},
				{
					CinemaHallID: 4,
					Name: 'Hall 2 at Cineplex in Los Angeles',
					TotalSeats: 100,
					CinemaID: 2,
				},
				{
					CinemaHallID: 5,
					Name: 'Hall 1 at Cineplex in Chicago',
					TotalSeats: 100,
					CinemaID: 3,
				},
				{
					CinemaHallID: 6,
					Name: 'Hall 1 at Cineplex in Houston',
					TotalSeats: 100,
					CinemaID: 4,
				},
				{
					CinemaHallID: 7,
					Name: 'Hall 1 at Cineplex in Philadelphia',
					TotalSeats: 100,
					CinemaID: 6,
				},
				{
					CinemaHallID: 8,
					Name: 'Hall 1 at Cineplex in San Antonio',
					TotalSeats: 100,
					CinemaID: 7,
				},
				{
					CinemaHallID: 9,
					Name: 'Hall 1 at Cineplex in San Diego',
					TotalSeats: 100,
					CinemaID: 8,
				},
				{
					CinemaHallID: 10,
					Name: 'Hall 1 at Cineplex in Dallas',
					TotalSeats: 100,
					CinemaID: 9,
				},
			],
			skipDuplicates: true,
		})

		// Seed Movies
		await prisma.movie.createMany({
			data: [
				{
					MovieID: 1,
					Title: 'Inception',
					Description: 'A thief who steals corporate secrets...',
					Duration: new Date(),
					Language: 'English',
					ReleaseDate: new Date('2010-07-16'),
					Country: 'USA',
					Genre: 'Sci-Fi',
				},
				{
					MovieID: 2,
					Title: 'The Dark Knight',
					Description: 'Batman faces the Joker...',
					Duration: new Date(),
					Language: 'English',
					ReleaseDate: new Date('2008-07-18'),
					Country: 'USA',
					Genre: 'Action',
				},
				{
					MovieID: 3,
					Title: 'Forrest Gump',
					Description: 'The presidencies of Kennedy and Johnson...',
					Duration: new Date(),
					Language: 'English',
					ReleaseDate: new Date('1994-07-06'),
					Country: 'USA',
					Genre: 'Drama',
				},
				{
					MovieID: 4,
					Title: 'The Matrix',
					Description:
						'A computer hacker learns about the true nature of reality...',
					Duration: new Date(),
					Language: 'English',
					ReleaseDate: new Date('1999-03-31'),
					Country: 'USA',
					Genre: 'Action',
				},
				{
					MovieID: 5,
					Title: 'Parasite',
					Description: 'A poor family schemes to become employed...',
					Duration: new Date(),
					Language: 'Korean',
					ReleaseDate: new Date('2019-05-30'),
					Country: 'South Korea',
					Genre: 'Thriller',
				},
				{
					MovieID: 6,
					Title: 'The Shawshank Redemption',
					Description: 'Two imprisoned men bond over a number of years...',
					Duration: new Date(),
					Language: 'English',
					ReleaseDate: new Date('1994-09-23'),
					Country: 'USA',
					Genre: 'Drama',
				},
				{
					MovieID: 7,
					Title: 'Titanic',
					Description:
						'A seventeen-year-old aristocrat falls in love with a kind but poor artist...',
					Duration: new Date(),
					Language: 'English',
					ReleaseDate: new Date('1997-12-19'),
					Country: 'USA',
					Genre: 'Romance',
				},
				{
					MovieID: 8,
					Title: 'Avengers: Endgame',
					Description:
						'The remaining Avengers must figure out a way to bring back their vanquished allies...',
					Duration: new Date(),
					Language: 'English',
					ReleaseDate: new Date('2019-04-26'),
					Country: 'USA',
					Genre: 'Action',
				},
				{
					MovieID: 9,
					Title: 'The Godfather',
					Description:
						"An organized crime dynasty's aging patriarch transfers control...",
					Duration: new Date(),
					Language: 'English',
					ReleaseDate: new Date('1972-03-24'),
					Country: 'USA',
					Genre: 'Crime',
				},
				{
					MovieID: 10,
					Title: 'Spider-Man: No Way Home',
					Description:
						"Peter Parker's secret is revealed, putting those he loves at risk...",
					Duration: new Date(),
					Language: 'English',
					ReleaseDate: new Date('2021-12-17'),
					Country: 'USA',
					Genre: 'Action',
				},
			],
			skipDuplicates: true,
		})

		// Seed Users
		await prisma.user.createMany({
			data: [
				{
					UserID: 1,
					Name: 'John Doe',
					Password: 'password1',
					Email: 'john.doe@example.com',
					Phone: '123-456-7890',
				},
				{
					UserID: 2,
					Name: 'Jane Smith',
					Password: 'password2',
					Email: 'jane.smith@example.com',
					Phone: '987-654-3210',
				},
				{
					UserID: 3,
					Name: 'Michael Johnson',
					Password: 'password3',
					Email: 'michael.johnson@example.com',
					Phone: '456-789-0123',
				},
				{
					UserID: 4,
					Name: 'Emily Davis',
					Password: 'password4',
					Email: 'emily.davis@example.com',
					Phone: '789-012-3456',
				},
				{
					UserID: 5,
					Name: 'Chris Brown',
					Password: 'password5',
					Email: 'chris.brown@example.com',
					Phone: '234-567-8901',
				},
			],
			skipDuplicates: true,
		})

		// Seed Shows
		await prisma.show.createMany({
			data: [
				{
					ShowID: 1,
					Date: new Date('2024-07-15'),
					StartTime: new Date('2024-07-15T14:00:00'),
					EndTime: new Date('2024-07-15T16:00:00'),
					CinemaHallID: 1,
					MovieID: 1,
				},
				{
					ShowID: 2,
					Date: new Date('2024-07-15'),
					StartTime: new Date('2024-07-15T16:30:00'),
					EndTime: new Date('2024-07-15T18:30:00'),
					CinemaHallID: 2,
					MovieID: 2,
				},
				{
					ShowID: 3,
					Date: new Date('2024-07-16'),
					StartTime: new Date('2024-07-16T15:00:00'),
					EndTime: new Date('2024-07-16T17:00:00'),
					CinemaHallID: 3,
					MovieID: 3,
				},
				{
					ShowID: 4,
					Date: new Date('2024-07-16'),
					StartTime: new Date('2024-07-16T18:00:00'),
					EndTime: new Date('2024-07-16T20:00:00'),
					CinemaHallID: 4,
					MovieID: 4,
				},
				{
					ShowID: 5,
					Date: new Date('2024-07-17'),
					StartTime: new Date('2024-07-17T14:00:00'),
					EndTime: new Date('2024-07-17T16:00:00'),
					CinemaHallID: 5,
					MovieID: 5,
				},
				{
					ShowID: 6,
					Date: new Date('2024-07-17'),
					StartTime: new Date('2024-07-17T16:30:00'),
					EndTime: new Date('2024-07-17T18:30:00'),
					CinemaHallID: 6,
					MovieID: 6,
				},
				{
					ShowID: 7,
					Date: new Date('2024-07-18'),
					StartTime: new Date('2024-07-18T15:00:00'),
					EndTime: new Date('2024-07-18T17:00:00'),
					CinemaHallID: 7,
					MovieID: 7,
				},
				{
					ShowID: 8,
					Date: new Date('2024-07-18'),
					StartTime: new Date('2024-07-18T18:00:00'),
					EndTime: new Date('2024-07-18T20:00:00'),
					CinemaHallID: 8,
					MovieID: 8,
				},
				{
					ShowID: 9,
					Date: new Date('2024-07-19'),
					StartTime: new Date('2024-07-19T14:00:00'),
					EndTime: new Date('2024-07-19T16:00:00'),
					CinemaHallID: 9,
					MovieID: 9,
				},
				{
					ShowID: 10,
					Date: new Date('2024-07-19'),
					StartTime: new Date('2024-07-19T16:30:00'),
					EndTime: new Date('2024-07-19T18:30:00'),
					CinemaHallID: 10,
					MovieID: 10,
				},
			],
			skipDuplicates: true,
		})

		// Seed Bookings
		await prisma.booking.createMany({
			data: [
				{
					BookingID: 1,
					NumberOfSeats: 2,
					Timestamp: new Date(),
					Status: 1,
					UserID: 1,
					ShowID: 1,
				},
				{
					BookingID: 2,
					NumberOfSeats: 3,
					Timestamp: new Date(),
					Status: 1,
					UserID: 2,
					ShowID: 2,
				},
				{
					BookingID: 3,
					NumberOfSeats: 1,
					Timestamp: new Date(),
					Status: 1,
					UserID: 3,
					ShowID: 3,
				},
				{
					BookingID: 4,
					NumberOfSeats: 4,
					Timestamp: new Date(),
					Status: 1,
					UserID: 4,
					ShowID: 4,
				},
				{
					BookingID: 5,
					NumberOfSeats: 2,
					Timestamp: new Date(),
					Status: 1,
					UserID: 5,
					ShowID: 5,
				},
				{
					BookingID: 6,
					NumberOfSeats: 3,
					Timestamp: new Date(),
					Status: 1,
					UserID: 1,
					ShowID: 6,
				},
				{
					BookingID: 7,
					NumberOfSeats: 1,
					Timestamp: new Date(),
					Status: 1,
					UserID: 2,
					ShowID: 7,
				},
				{
					BookingID: 8,
					NumberOfSeats: 4,
					Timestamp: new Date(),
					Status: 1,
					UserID: 3,
					ShowID: 8,
				},
				{
					BookingID: 9,
					NumberOfSeats: 2,
					Timestamp: new Date(),
					Status: 1,
					UserID: 4,
					ShowID: 9,
				},
				{
					BookingID: 10,
					NumberOfSeats: 3,
					Timestamp: new Date(),
					Status: 1,
					UserID: 5,
					ShowID: 10,
				},
			],
			skipDuplicates: true,
		})

		// Seed Payments
		await prisma.payment.createMany({
			data: [
				{
					PaymentID: 1,
					Amount: 25.5,
					Timestamp: new Date(),
					PaymentMethod: 1,
					BookingID: 1,
				},
				{
					PaymentID: 2,
					Amount: 35.0,
					Timestamp: new Date(),
					PaymentMethod: 2,
					BookingID: 2,
				},
				{
					PaymentID: 3,
					Amount: 15.75,
					Timestamp: new Date(),
					PaymentMethod: 1,
					BookingID: 3,
				},
				{
					PaymentID: 4,
					Amount: 45.25,
					Timestamp: new Date(),
					PaymentMethod: 2,
					BookingID: 4,
				},
				{
					PaymentID: 5,
					Amount: 25.5,
					Timestamp: new Date(),
					PaymentMethod: 1,
					BookingID: 5,
				},
				{
					PaymentID: 6,
					Amount: 35.0,
					Timestamp: new Date(),
					PaymentMethod: 2,
					BookingID: 6,
				},
				{
					PaymentID: 7,
					Amount: 15.75,
					Timestamp: new Date(),
					PaymentMethod: 1,
					BookingID: 7,
				},
				{
					PaymentID: 8,
					Amount: 45.25,
					Timestamp: new Date(),
					PaymentMethod: 2,
					BookingID: 8,
				},
				{
					PaymentID: 9,
					Amount: 25.5,
					Timestamp: new Date(),
					PaymentMethod: 1,
					BookingID: 9,
				},
				{
					PaymentID: 10,
					Amount: 35.0,
					Timestamp: new Date(),
					PaymentMethod: 2,
					BookingID: 10,
				},
			],
			skipDuplicates: true,
		})

		// Seed Cinema Seats
		await prisma.cinema_Seat.createMany({
			data: [
				{ CinemaSeatID: 1, SeatNumber: 1, Type: 1, CinemaHallID: 1 },
				{ CinemaSeatID: 2, SeatNumber: 2, Type: 1, CinemaHallID: 1 },
				{ CinemaSeatID: 3, SeatNumber: 3, Type: 2, CinemaHallID: 2 },
				{ CinemaSeatID: 4, SeatNumber: 4, Type: 2, CinemaHallID: 2 },
				{ CinemaSeatID: 5, SeatNumber: 5, Type: 1, CinemaHallID: 3 },
				{ CinemaSeatID: 6, SeatNumber: 6, Type: 1, CinemaHallID: 3 },
				{ CinemaSeatID: 7, SeatNumber: 7, Type: 2, CinemaHallID: 4 },
				{ CinemaSeatID: 8, SeatNumber: 8, Type: 2, CinemaHallID: 4 },
				{ CinemaSeatID: 9, SeatNumber: 9, Type: 1, CinemaHallID: 5 },
				{ CinemaSeatID: 10, SeatNumber: 10, Type: 1, CinemaHallID: 5 },
			],
			skipDuplicates: true,
		})

		// Seed Show Seats
		// Seed Show Seats with BookingID referencing existing bookings
		await prisma.show_Seat.createMany({
			data: [
				{
					ShowSeatID: 1,
					Status: 1,
					Price: 10.0,
					CinemaSeatID: 1,
					ShowID: 1,
					BookingID: 1,
				},
				{
					ShowSeatID: 2,
					Status: 1,
					Price: 10.0,
					CinemaSeatID: 2,
					ShowID: 1,
					BookingID: 1,
				},
				{
					ShowSeatID: 3,
					Status: 1,
					Price: 15.0,
					CinemaSeatID: 3,
					ShowID: 2,
					BookingID: 2,
				},
				{
					ShowSeatID: 4,
					Status: 1,
					Price: 15.0,
					CinemaSeatID: 4,
					ShowID: 2,
					BookingID: 2,
				},
				{
					ShowSeatID: 5,
					Status: 1,
					Price: 10.0,
					CinemaSeatID: 5,
					ShowID: 3,
					BookingID: 3,
				},
				{
					ShowSeatID: 6,
					Status: 1,
					Price: 10.0,
					CinemaSeatID: 6,
					ShowID: 3,
					BookingID: 3,
				},
				{
					ShowSeatID: 7,
					Status: 1,
					Price: 15.0,
					CinemaSeatID: 7,
					ShowID: 4,
					BookingID: 4,
				},
				{
					ShowSeatID: 8,
					Status: 1,
					Price: 15.0,
					CinemaSeatID: 8,
					ShowID: 4,
					BookingID: 4,
				},
				{
					ShowSeatID: 9,
					Status: 1,
					Price: 10.0,
					CinemaSeatID: 9,
					ShowID: 5,
					BookingID: 5,
				},
				{
					ShowSeatID: 10,
					Status: 1,
					Price: 10.0,
					CinemaSeatID: 10,
					ShowID: 5,
					BookingID: 5,
				},
			],
			skipDuplicates: true,
		})

		// const createRandomUsers = () => {
		// 	return {
		// 		name: faker.person.fullName(),
		// 		email: faker.internet.email(),
		// 		avatar: faker.internet.avatar(),
		// 		role: 'user',
		// 	} as unknown as any
		// }

		// // create users
		// await prisma.user.createMany({
		// 	data: faker.helpers.multiple(createRandomUsers, { count: length }),
		// 	skipDuplicates: true,
		// })

		// const users = await prisma.user.findMany({
		// 	where: {
		// 		role: 'user',
		// 	},
		// 	select: {
		// 		id: true,
		// 	},
		// })

		// const getRandomUserId = () => {
		// 	const index = Math.floor(Math.random() * 11)

		// 	if (users.at(index) !== undefined) {
		// 		return users[index].id
		// 	}

		// 	return ''
		// }

		// const createRandomPosts = () => {
		// 	return {
		// 		name: faker.lorem.slug(),
		// 		image: faker.image.url(),
		// 		user_id: getRandomUserId(),
		// 	}
		// }

		// // create posts
		// await prisma.post.createMany({
		// 	data: faker.helpers.multiple(createRandomPosts, { count: length }),
		// 	skipDuplicates: true,
		// })

		// await prisma.user.createMany({
		// 	data: [
		// 		{
		// 			Name: 'jack',
		// 			Email: 'jack@jack.com',
		// 			Phone: '912345678',
		// 			Password: '4455',
		// 		},
		// 		{
		// 			Name: 'anna',
		// 			Email: 'anna@anna.com',
		// 			Phone: '912345671',
		// 			Password: '4455',
		// 		},
		// 		{
		// 			Name: 'will',
		// 			Email: 'will@will.com',
		// 			Phone: '912345672',
		// 			Password: '4455',
		// 		},
		// 		{
		// 			Name: 'mike',
		// 			Email: 'mike@mike.com',
		// 			Phone: '912345675',
		// 			Password: '4455',
		// 		},
		// 	],
		// 	skipDuplicates: true,
		// })

		console.log('🚀 ~ file: seed.ts:45 ~ data feeded successfully.')
	} catch (error) {
		console.log('🚀 ~ file: seed.ts:44 ~ feedSomeData ~ error:', error)
	}
}

feedSomeData(config.dummyDataLength)
