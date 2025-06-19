const TicketSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Ticket', TicketSchema);