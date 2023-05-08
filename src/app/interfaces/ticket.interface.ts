import { ticketDetailI } from "./ticketDetail.interface";

export interface ticketI{
  id: string;
  idTicketBet: number;
  active: number;
  dateActive: string;
  dateDeactive: string;

  listTicketDetail: ticketDetailI[]
}
