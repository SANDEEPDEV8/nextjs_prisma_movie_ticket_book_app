import Image from 'next/image'
import { Inter } from 'next/font/google'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import SelectField from '../components/ui/SelectField'
import { Button } from '@/components/ui/button'
import userApiHandler from './api/user'
import { useEffect, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import {
	ToastAction,
	ToastProvider,
	ToastViewport,
} from '@/components/ui/toast'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

enum STATUS {
	//NONE,
	BOOKED,
	OPEN,
}

interface Seat {
	number: number
	status: STATUS
}
export default function Home() {
	// const seats: any = []
	const [seats, setSeats] = useState<Seat[]>([])

	const [users, setUsers] = useState<any>([])
	const [city, setCity] = useState<any>([])
	const [movie, setMovie] = useState<any>([])
	const [cinemahall, setCinemahall] = useState<any>([])
	// const [loading, setLoading] = useState(true)
	// const [error, setError] = useState<string | null>(null)

	const { toast } = useToast()

	console.log(users)
	console.log(city)
	console.log('move', movie)
	console.log(cinemahall)

	useEffect(() => {
		let sts: Seat[] = []
		const numbers = Array.from({ length: 100 }, (_, index) => index + 1)
		numbers.map((i) => {
			sts.push({ number: i, status: STATUS.OPEN })
		})

		setSeats(sts)

		const fetchUsers = async () => {
			try {
				const userresponse = await fetch('/api/user')
				const cityresponse = await fetch('/api/city')
				const movieresponse = await fetch('/api/movie')
				const cinemahallresponse = await fetch('/api/cinemahall')

				const userdata = await userresponse.json()
				const citydata = await cityresponse.json()
				const moviedata = await movieresponse.json()
				const cinemahalldata = await cinemahallresponse.json()

				console.log(userdata)
				console.log(citydata)
				console.log(moviedata)
				console.log(cinemahalldata)

				if (userresponse.ok) {
					setUsers(userdata.data)
				}
				if (cityresponse.ok) {
					setCity(citydata.data)
				}
				if (movieresponse.ok) {
					setMovie(moviedata.data)
				}
				if (cinemahallresponse.ok) {
					setCinemahall(cinemahalldata.data)
				}
				//  else {
				// 	setError(data.message)
				// }
			} catch (error) {
				// setError('An unexpected error occurred')
			} finally {
				// setLoading(false)
			}
		}

		fetchUsers()
	}, [])

	const handleOnSeat = (seatToUpdate: Seat) => {
		if (seatToUpdate.status === STATUS.OPEN) {
			setSeats((prevSeats) =>
				prevSeats.map((seat) =>
					seat.number === seatToUpdate.number
						? { ...seat, status: STATUS.BOOKED }
						: seat
				)
			)
		}
		toast({
			title: 'Seat Booked',
			description: `You have successfully booked seat.`,
			//variant: 'success',
		})
		console.log(seatToUpdate)
	}

	const onError = () => {
		toast({
			variant: 'destructive',
			title: 'Uh oh! Something went wrong.',
			description: 'There was a problem with your request.',
			action: <ToastAction altText="Try again">Try again</ToastAction>,
		})
	}

	const onSuccess = () => {
		toast({
			//variant: 'destructive',
			title: 'Seat booked.',
			// description: 'There was a problem with your request.',
			// action: <ToastAction altText="Try again">Try again</ToastAction>,
		})
	}

	return (
		<>
			<ToastProvider>
				<Button variant={'default'}>Click me</Button>
				<Button variant={'destructive'}>Click me</Button>
				<Button variant={'ghost'}>Click me</Button>
				<Button variant={'link'}>Click me</Button>
				<Button variant={'outline'}>Click me</Button>
				<Button variant={'secondary'}>Click me</Button>

				<SelectField
					label="Select User"
					data={users}
					idField="UserID"
					nameField="Name"
				/>
				<SelectField
					label="Select City"
					data={city}
					idField="CityID"
					nameField="Name"
				/>
				<SelectField
					label="Select Movie"
					data={movie}
					idField="MovieID"
					nameField="Title"
				/>
				{/* <SelectField label="Select Cinema"/> */}
				<SelectField
					label="Select Cinema Hall"
					data={cinemahall}
					idField="CinemaHallID"
					nameField="Name"
				/>
				<Button variant={'default'}>Book</Button>

				<div className="grid grid-cols-10 gap-2">
					{seats.map((i: any) => {
						return (
							<Button
								key={i.number}
								onClick={() => handleOnSeat(i)}
								variant={i.status === STATUS.OPEN ? 'outline' : 'destructive'}
							>
								{i.number}
							</Button>
						)
					})}
				</div>
				<Toaster />
				<ToastViewport />
			</ToastProvider>
		</>
	)
}
