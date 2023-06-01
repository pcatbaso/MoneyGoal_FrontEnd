import { ticketDetailI } from "./ticketDetail.interface";

export interface ticketI{
  id?: string;
  idUser: number;
  idTicketBet: number;
  active?: number;
  dateActive?: string;
  dateDeactive?: string;
  dateRange?: string;
  createdDate?: string;
  updateDate?: string;

  listTicketDetail: ticketDetailI[]
}
