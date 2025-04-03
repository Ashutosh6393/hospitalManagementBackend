import { readAppointmentData } from "../../models/lib.js"

export const getAllAppointments = async (req, res) =>{
    try {
        const data = await readAppointmentData();
        res.status(200).send({
            status: "success",
            data: JSON.parse(data)
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
