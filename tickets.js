// Assume the limited number of tickets is 500 and a ticket is Rs 100/=
Mutex m 
tickets = 500
ticketPrice = 100
income = 0

reserve(n){
    if n > 4{
        return Error("can't purchase more than 4 tickets at a time!")
    }

    // aquire mutex before accessing shared variables
    m.lock()
    tickets = tickets - 4
    income = income + n*ticketPrice
    m.unlock()

    return Success("Purchase Success")
}

