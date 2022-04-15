# My first makefile

all: prog

prog: main.o
	gcc -o prog main.o 

main.o: main.c 
	gcc -o main.o main.c -c -W -Wall -ansi -pedantic

clean:
	rm -rf */*o *o *~ prog

run:
	make clean
	make prog
	./prog