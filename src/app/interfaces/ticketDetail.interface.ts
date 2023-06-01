export interface ticketDetailI{
  idTicketBet: number;
  numGame: number;
  idLocalTeam?: number;
  nameLocal?: string;
  idVisitingTeam?: number;
  nameVisitante?: string;
  startDate: string;
  result: string;
  localApuesta?: boolean;
  drawApuesta?: boolean;
  visitApuesta?: boolean;
  costo?: number;
  createdDate?: string;
  updateDate?: string;
}
