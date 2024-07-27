import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import * as React from 'react'
interface SelectFieldProps {
	label: string
	data: any[]
	idField: string
	nameField: string
}

const SelectField: React.FC<SelectFieldProps> = (props) => {
	const { idField, nameField } = props
	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder={props.label} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{props.data?.map((i: any) => {
						return (
							<SelectItem key={i[idField]} value={i[idField]}>
								{i[nameField]}
							</SelectItem>
						)
					})}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default SelectField
