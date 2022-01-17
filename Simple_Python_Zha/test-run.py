import time
import random as rd
import csv

# Zha Test Run on Python 
def rps():
    move_dict = {"Rock": "Scissors", "Scissors": "Paper", "Paper": "Rock"}
    check = 0
    options = ["Rock", "Paper","Scissors"]
    x = 0
    # if draw restart process with while loop
    while True:
        # ensure input is valid
        while check == 0:
            move = input("Please your choice of Rock, Paper or Scissors (Caps & Case-sensitive): ")
            if move in options:
                break
            # ensure input is valid
            print("Please input one of the 3 options")
        print(f"You have picked {move}")
        for i in range(0,4):
            time.sleep(0.3)
            print(". ", end=" ")

        time.sleep(2)

        # Decide opponent cpu's move
        opp_move = options[rd.randint(0,3)]
        print("\n")
        print(f"Your Opponent has picked {opp_move}")
        # Player wins
        if opp_move == move_dict[move]:
            print("You Won!\nYou shall start first")
            break
        # CPU wins
        elif move == move_dict[opp_move]:
            print("You Lost, your opponent shall begin first.")
            break
        # Draw, continue loop
        if move == opp_move:
            print("Its a draw! Lets try again!")

# Zha game Beggins
print("Welcome To Zha Game!")
time.sleep(1)
print("A Classic Singaporean Children Game")

# check whether username has been used before
# open the file in read mode
end = False
while end == False:
    end = True
    username = input("Please Input Your Username Of Choice: ")
    with open ('Simple_Python_Zha/Usernames.csv', 'r') as f:
# pass the file object to reader() to get the reader object
        read = f.read()
        for row in read:
# Check if username inputed has been used
            if username in read:
                end = False
                print("Username has already been used")
                break
# If Username not used append into csv
with open ('Simple_Python_Zha/Usernames.csv', "a") as f:
    csv_writer = csv.writer(f)
    csv_writer.writerow([username])

for i in range(0,6):
    if i == 0:
        print("Loading", end=" ")
    time.sleep(0.5)
    print(". ", end=" ")
time.sleep(4)
print("\n\n")
print(f"Welcome to Zha-Game {username}"+"\n")
time.sleep(2)
print("Lets play a simple game of scissors paper stone to decide who begins first")
time.sleep(0.3)
rps()



