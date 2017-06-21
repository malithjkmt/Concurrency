rani = Semaphore(0)
kamal = Semaphore(0)

Thread Kamal
    while(true):
        make_2_rounds_of_kottu()
        rani.up()
        kamal.down()
        serve_kottu()

Thread Rani
    while(true):
        make_3_curries()
        kamal.up()
        rani.down()
        serve_curries()
