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
        for i in range(0,3):
            time.sleep(0.3)
            print(". ", end=" ")

        time.sleep(2)

        # Decide opponent cpu's move
        opp_move = options[rd.randint(0,2)]
        print("\n")
        print(f"Your Opponent has picked {opp_move}")
        time.sleep(0.5)
        # Player wins
        if opp_move == move_dict[move]:
            print("You Won!\nYou shall start first")
            return True
        # CPU wins
        elif move == move_dict[opp_move]:
            print("You Lost, your opponent shall begin first.")
            return False
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

for i in range(0,5):
    if i == 0:
        print("Loading", end=" ")
    time.sleep(0.5)
    print(". ", end=" ")
time.sleep(4)
print("\n\n")
print(f"Welcome to Zha-Game {username}"+"\n")
time.sleep(2)

# Scissors stone game to decide who starts first
print("Lets play a simple game of scissors paper stone to decide who begins first")
time.sleep(0.3)

# Who starts first if rps() returns True, User starts first, False, CPU starts first
turn = rps()

time.sleep(1)
# Zha Game Begins

# Creating hand class
class hands:
    def __init__(self):
        # True means alive, False means Dead
        self.left_status = True 
        # Move
        self.left_move = None
        # True means alive, False means Dead
        self.right_status = True
        # Move
        self.right_move = None


# Creating User Object:
user = hands()

# Creating CPU Object:
cpu = hands()

# List of moves
zha_moves = ["Rock", "Human", "Gun"]
# Move counters
zha_moves_dict = {"Human": "Rock", "Rock": "Gun", "Gun": "Human", None: "none"}

# Winner variable
winner = None
# loop ends when one object both status are False
while (user.left_status or user.right_status) and (cpu.left_status or cpu.right_status): 
    print("\n")
    if turn:
        print("Your Turn!")
    else:
        print("Your opponent's turn")
    #user moves
    while True:
        if user.left_status:
            user.left_move = input("Please select Gun, Human or Rock for your left hand (Caps & Case-Sensitive): ")
            if user.left_move in zha_moves:
                break
            else:
                print("Please input one of the 3 options")
        else:
            user.left_move = None
            break

    while True:
        if user.right_status:
            user.right_move = input("Please select Gun, Human or Rock for your right hand (Caps & Case-Sensitive): ")
            if user.right_move in zha_moves:
                break
            else:
                print("Please input one of the 3 options")
        else:
            user.right_move = None
            break

    # LoadTime   
    print("Waiting for your opponent's choice\n")
    for i in range(0,3):
        if i == 0:
            print("Loading", end=" ")
        time.sleep(1)
        print(". ", end=" ")
    print("\n")
    # cpu moves
    if cpu.left_status:
        cpu.left_move = zha_moves[rd.randint(0,2)]
        print(f"Your opponent's left hand is {cpu.left_move}")
    else:
        cpu.left_move = None
    time.sleep(0.5)
    if cpu.right_status:
        cpu.right_move = zha_moves[rd.randint(0,2)]
        print(f"Your opponent's right hand is {cpu.right_move}")
    else:
        cpu.left_move = None
    time.sleep(1)
    
    # Results taking into consideration of whose turn it is
    # [left_move, right_move]
    attacker = [None, None]
    defender = [None, None]

    # if users turn
    if turn:
        attacker[0] = user.left_move
        attacker[1] = user.right_move
        defender[0] = cpu.left_move
        defender[1] = cpu.right_move     
        # attacker left hand attacks defender left if not right
        if zha_moves_dict[attacker[0]] == defender[0]:
            cpu.left_status = False
            defender[0] = None
        elif zha_moves_dict[attacker[0]] == defender[1]:
            cpu.right_status = False
            defender[1] = None
        # attacker right hand attacks defender left if not right
        if zha_moves_dict[attacker[1]] == defender[0]:
            cpu.left_status = False
            defender[0] = None
        elif zha_moves_dict[attacker[1]] == defender[1]:
            cpu.right_status = False
            defender[1] = None

    # if opponents turn
    else: 
        defender[0] = user.left_move
        defender[1] = user.right_move
        attacker[0] = cpu.left_move
        attacker[1] = cpu.right_move
        if zha_moves_dict[attacker[0]] == defender[0]:
            user.left_status = False
            defender[0] = None
        elif zha_moves_dict[attacker[0]] == defender[1]:
            user.right_status = False
            defender[1] = None
        # attacker right hand attacks defender left if not right
        if zha_moves_dict[attacker[1]] == defender[0]:
            user.left_status = False
            defender[0] = None
        elif zha_moves_dict[attacker[1]] == defender[1]:
            user.right_status = False
            defender[1] = None

    print(attacker)
    print(defender)
    time.sleep(1)
    print("\n")
    print("***** This Turn ******")
    # show moves if user turn
    if turn == True:
        if attacker[0] == None:
            attacker[0] = "Dead"
        print("Your Left Hand: " + attacker[0])
        if attacker[1] == None:
            attacker[1] = "Dead"
        print("Your Right Hand: " + attacker[1])
        if defender[0] == None:
            defender[0] = "Dead"
        print("Opponent's Left Hand: " + defender[0])
        if defender[1] == None:
            defender[1] = "Dead"
        print("Opponent's Right Hand: " + defender[1])
    elif turn == False: 
    # show moves if cpu
        if defender[0] == None:
            defender[0] = "Dead"
        print("Your Left Hand: " + defender[0])
        if defender[1] == None:
            defender[1] = "Dead"
        print("Your Right Hand: " + defender[1])
        if attacker[0] == None:
            attacker[0] = "Dead"
        print("Opponent's Left Hand: " + attacker[0])
        if attacker[1] == None:
            attacker[1] = "Dead"
        print("Opponent's Right Hand: " + attacker[1])

    print("\n")
    # Swap turns
    if turn:
        turn = False
    else: 
        turn = True
    
    # announce lives left
    # User Lives
    if user.left_status == True and user.right_status == True:
        print("You still have 2 lives")
    if user.left_status == False and user.right_status == True or user.left_status == True and user.right_status == False:
        print("You have 1 life left")
    # Cpu lives
    if cpu.left_status == True and cpu.right_status == True:
        print("Your opponent still has 2 lives")
    if cpu.left_status == False and cpu.right_status == True or cpu.left_status == True and cpu.right_status == False:
        print("Your opponent has 1 life left")

    # Wait
    print("\n")
    for i in range(0,3):
        print(". ", end=" ")
        time.sleep(1)
    print("\n")

    # If one loses
    if user.left_status == False and user.right_status == False:
        print("You Have no lives left")
        winner = "cpu"
    elif cpu.left_status == False and cpu.right_status == False:
        print("Your opponent has no lives left")
        winner = "user"

if winner == "user":
    print("Congratulations you have won!")
else:
    print("You have lost :(") 
    
       
        

    
    
        
    
        
        
