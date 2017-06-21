kamal = Semaphore(0)   
Mutex m			// controls access to shared variable ‘slices’
slices = 0		// stores number of pizza slices available (this variable is shared among all students and Kamal)
ConditionalVariable cv	// to synchronize pizzaKamal and student threads

pizzaKamal()
    while(true)
        kamal.down()
        delivers_pizza()
        m.lock()
            slices = s	// set number of slices available, to s
        m.unlock()
        cv.broadcast()	// wake up All sleeping students ( number of students may > s)

student()
    while(true)
        m.lock() 
        while(slices <= 0):	// only one student call Kamal
            if(slices == 0):
                kamal.up()        
                slices --		// to avoid next student calling Kamal again
            cv.wait(m)	    // release the lock ‘m’ and wait until waken by Kamal, when waken up lock the mutex again
        slices --	
        m.unlock()
        study_while_eating()
