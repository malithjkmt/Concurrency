rani = Semaphore(0)
kamal = Semaphore(0)

Thread Kamal
    while(true):
        make_2_rounds_of_kottu()
        r.up()
        k.down()
        serve_kottu()

Thread Rani
    while(true):
        make_3_curries()
        k.up()
        r.down()
        serve_curries()
