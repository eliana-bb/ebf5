import tkinter
import tkinter.font
from tkinter import ttk

root = tkinter.Tk()                                                             # Toplevel window called root

root.title("EBF5 Capture Calculator")

pad_top = ttk.Frame(root, height=5)                                             # Top of frame padding
pad_top.grid(row=0, column=0, columnspan=5)

pad_bottom = ttk.Frame(root, height=5)                                          # Bottom of frame padding
pad_bottom.grid(row=4, column=0, columnspan=5)

pad_left = ttk.Frame(root, width=5)                                             # Left of frame padding
pad_left.grid(row=1, column=0, rowspan=3)

pad_right = ttk.Frame(root, width=5)                                            # Right of frame padding
pad_right.grid(row=1, column=4, rowspan=3)

pad_center = ttk.Frame(root, width=5)                                           # Padding for between the two entry frames
pad_center.grid(row=1, column=2, rowspan=3)

frame_capturer = ttk.Frame(root, relief=tkinter.RAISED, padding=5)              # Left entry frame, about the capturer's stats
frame_capturer.grid(row=1, column=1, sticky=tkinter.NSEW)

frame_enemy = ttk.Frame(root, relief=tkinter.RAISED, padding=5)                 # Right entry frame, about the enemy's stats
frame_enemy.grid(row=1, column=3, sticky=tkinter.NSEW, rowspan=3)

pad_sub = ttk.Frame(root, height=5)
pad_sub.grid(row=2, column=1)

frame_result = ttk.Frame(root, relief=tkinter.RAISED, padding=5)
frame_result.grid(row=3, column=1, sticky=tkinter.NSEW)

labelfont = tkinter.font.Font(size=15)

##################################################################################### Creating capturer frame's contents

label_capturer = ttk.Label(frame_capturer, font=labelfont, text="Capturer", relief=tkinter.RAISED, padding=5)     # Label at the top
label_capturer.grid(row=0, column=0, sticky=tkinter.NW, columnspan=3)

cap_goodluck = ttk.Checkbutton(frame_capturer, padding=2, text="Good Luck")              # Create a checkbox
cap_goodluck.grid(row=1, column=0, sticky=tkinter.W, columnspan=2)
cap_goodluck.state(['!alternate'])                                                          # Clear the ttk nonsense

cap_badluck = ttk.Checkbutton(frame_capturer, padding=2, text="Bad Luck")
cap_badluck.grid(row=2, column=0, sticky=tkinter.W, columnspan=2)
cap_badluck.state(['!alternate'])

cap_equips = ttk.Spinbox(frame_capturer, from_=0, to=3, increment=1, width=2)               # Make a spinbox (entry with arrows)
cap_equips.grid(row=3, column=0, sticky=tkinter.W)
cap_equips.set(0)                                                                           # Set its default value

equiplabel = ttk.Label(frame_capturer, text="Equips")
equiplabel.grid(row=3, column=1, sticky=tkinter.W)

cap_cards = ttk.Spinbox(frame_capturer, from_=0, to=5, increment=1, width=2)                # Repeat for monster cards
cap_cards.grid(row=4, column=0, sticky=tkinter.W)
cap_cards.set(0)

cardlabel = ttk.Label(frame_capturer, text="Cards")
cardlabel.grid(row=4, column=1, sticky=tkinter.W)

cap_coward = ttk.Checkbutton(frame_capturer, padding=2, text="Cowardly Foes")               # Create checkbutton
cap_coward.grid(row=1, column=2, sticky=tkinter.W)
cap_coward.state(['!alternate'])                                                            # Clear ttk nonsense
cap_1pchallenge = ttk.Checkbutton(frame_capturer, padding=2, text="1P Challenge")           # Repeat 2x
cap_1pchallenge.grid(row=2, column=2, sticky=tkinter.W)
cap_1pchallenge.state(['!alternate'])
cap_2pchallenge = ttk.Checkbutton(frame_capturer, padding=2, text="2P Challenge")
cap_2pchallenge.grid(row=3, column=2, sticky=tkinter.W)
cap_2pchallenge.state(['!alternate'])

######################################################################################## Creating enemy frame's contents 
 
label_enemy = ttk.Label(frame_enemy, font=labelfont, text="Enemy", relief=tkinter.RAISED, padding=5)      #Label at the top
label_enemy.grid(row=0, column=0, columnspan=3, sticky=tkinter.NW)

frame_hp = ttk.Frame(frame_enemy)                                       # Frame for the HP input
frame_hp.grid(row=1, column=0, sticky=tkinter.NW)

label_hp = ttk.Label(frame_hp, text="HP")                               # Label to top of frame
label_hp.grid(row=0, column=0, columnspan=3, sticky=tkinter.N)

entry_curhp = ttk.Entry(frame_hp, width=7, justify=tkinter.LEFT)        # Current HP value
entry_curhp.grid(row=1, column=0)
entry_curhp.insert(0, 0)

label_slash = ttk.Label(frame_hp, text="/")                             # Slash divider between current and maximum hp values
label_slash.grid(row=1, column=1)

entry_maxhp = ttk.Entry(frame_hp, width=7, justify=tkinter.RIGHT)       # Maximum HP value
entry_maxhp.grid(row=1, column=2)
entry_maxhp.insert(0, 0)

########

frame_status = ttk.Frame(frame_enemy)                                   # Frame for adding in status effects
frame_status.grid(row=1, column=1, sticky=tkinter.N)

label_status = ttk.Label(frame_status, text="Status Effects")           # Label for top of frame
label_status.grid(column=0, row=0, sticky=tkinter.N)

effects = {                                                             # Dict of every effect and its modifier
    "Freeze" : 2,
    "Stun" : 1,
    "Syphon" : 0.5,
    "Doom" : 0.4,
    "Bad Luck" : 0.3,
    "Scorch" : 0.3,
    "Poison" : 0.2,
    "Virus" : 0.2,
    "Burn" : 0.2,
    "Chill" : 0.2,
    "Stagger" : 0.2,
    "Weaken" : 0.2,
    "Curse" : 0.2,
    "Tired" : 0.2,
    "Brave" : -0.2,
    "Morale" : -0.2,
    "Regen" : -0.2,
    "Good Luck" : -0.3,
    "Defend" : -0.5,
    "Auto-Revive" : -0.5,
    "" : 0
}

effectlist = []

for i in effects.keys():            # Assembles a list based on the dict's keys
    effectlist.append(i)

statuses = []                       # List of the comboboxes

def addstatus():                                                                # This function adds another combobox to the status frame
    global statuses
    statuses.append(ttk.Combobox(frame_status, width=11, values=effectlist))
    statuses[len(statuses)-1].grid(column=0,row=len(statuses)+1)

addstatusbutton = ttk.Button(frame_status, width=2, text="+", command=addstatus) # Button to trigger the above function
addstatusbutton.grid(column=0, row=1, sticky=tkinter.N)

#########

frame_debuffs = ttk.Frame(frame_enemy)
frame_debuffs.grid(row=1, column=2, sticky=tkinter.NE)

label_debuffs = ttk.Label(frame_debuffs, text="De/buffs")
label_debuffs.grid(row=0, column=0, columnspan=2)

label_def = ttk.Label(frame_debuffs, text="Def")
label_def.grid(row=1, column=0)

label_mdef = ttk.Label(frame_debuffs, text="Mdef")
label_mdef.grid(row=1, column=1)

entry_def = ttk.Spinbox(frame_debuffs, from_=-100, to=100, increment=5, width=4)
entry_def.grid(row=2, column=0)
entry_def.set(0)

entry_mdef = ttk.Spinbox(frame_debuffs, from_=-100, to=100, increment=5, width=4)
entry_mdef.grid(row=2, column=1)
entry_mdef.set(0)

label_evd = ttk.Label(frame_debuffs, text="Evd")
label_evd.grid(row=3, column=0)

label_hp = ttk.Label(frame_debuffs, text="Hp")
label_hp.grid(row=3, column=1)

entry_evd = ttk.Spinbox(frame_debuffs, from_=-100, to=100, increment=5, width=4)
entry_evd.grid(row=4, column=0)
entry_evd.set(0)

entry_hp = ttk.Spinbox(frame_debuffs, from_=-100, to=100, increment=5, width=4)
entry_hp.grid(row=4, column=1)
entry_hp.set(0)

############

basecapdict = {
    "Small Slimes": 90,
    "Bushes": 80,
    "Idols, Furry Slime": 70,
    "Worms": 60,
    "Cats": 55,
    "Bats": 50,
    "Dogs, Wasps": 45,
    "Sprites": 42,
    "Haunted Tree": 40,
    "Fishes": 38,
    "Gloop": 36,
    "Hands, Eyeball": 35,
    "Ores": 33,
    "Mirrors": 32,
    "Fabulous Gloop": 26,
    "Wraiths": 25,
    "Turtles, Skeleton Cat": 24,
    "Dolls": 23,
    "Creeps": 20,
    "Boulders": 18,
    "Clays": 17,
    "Flybots": 16,
    "Pixels": 15,
    "Fallen": 13,
    "Gun/Swordslinger": 12,
    "Crystals": 11,
    "Bears": 10,
    "Chompers": 9,
    "Golems, Jotun, BOSH, SNEK": 8,
    "Big Slimes, Squids, ?0x00, King Slime, ANGRY CHAIR, ROBO, GLOB, PUMPKUS": 7,
    "Defenders, TOTOM": 6,
    "Mammoths, A./V.Monolith, EaSeSkDragon, Beholder, Giga Golem, Sandworm, Sketches, PHOENIX": 5,
    "Laurelin, Poseidon, Skadi, Sol, U. Chibi, Jack, Protector, Rafflesia, GUOYE, TREAGURE, ??.@": 4,
    "Players, Hydras, C.Monolith, O.Dragon, Telperion, Vulcan, Praetorian, CORALIA, THE MAW, Gigalith, Devourer": 3,
    "Snowflake": 2
}

basecaplist = []

for i in basecapdict.keys():
    basecaplist.append(i)

basepad = ttk.Frame(frame_enemy, height=10)
basepad.grid(row=2, column=0, columnspan=3)

basebox = ttk.Combobox(frame_enemy, width=100, values=basecaplist)
basebox.grid(row=3, column=0, columnspan=3)

##################

def calculate_all():
    try:
        hpfactor = 0.98 + ((1-int(entry_curhp.get())/int(entry_maxhp.get())) ** 2 * 10)
    except ZeroDivisionError:
        label_result.configure(text="Enter HP value!")
    
    statusfactor = 1
    for i in statuses:
        statusfactor += effects[i.get()]
    
    debufffactor = 1 - (int(entry_def.get())/100) - (int(entry_mdef.get())/100) - (int(entry_evd.get())/50) - (int(entry_hp.get())/50)

    cap_goodluckstat = (cap_goodluck.state() == ('selected',))
    cap_badluckstat = (cap_badluck.state() == ('selected',))
    cap_1pstat = (cap_1pchallenge.state() == ('selected',))
    cap_2pstat = (cap_2pchallenge.state() == ('selected',))
    cap_cowardstat = (cap_coward.state() == ('selected',))

    print(int(cap_goodluckstat))

    capperfactor = 1 + (cap_goodluckstat * 0.3) + (int(cap_equips.get()) * 0.3) - (cap_badluckstat * 0.4)

    cardsfactor = 1 + (0.02 * int(cap_cards.get()))

    basefactor = (basecapdict[basebox.get()] + cap_2pstat + 2*cap_1pstat) * (1 + 0.15*cap_2pstat + 0.4*cap_1pstat + 0.3*cap_cowardstat)

    medianfactor = hpfactor * statusfactor * debufffactor * capperfactor * cardsfactor * basefactor

    print(medianfactor)

    if medianfactor >= 111:
        label_result.configure(text="Success!")
    elif medianfactor <= 90:
        label_result.configure(text="Failure")
    else:
        label_result.configure(text=str(round(100 - ((100-(medianfactor*0.9)) * (100/(medianfactor*0.2))))) + "%")

button_calculate = ttk.Button(frame_result, text="Calculate", command=calculate_all)
button_calculate.grid(row=0, column=0, sticky=tkinter.NW)

label_result = ttk.Label(frame_result)
label_result.grid(row=0, column=1)

root.mainloop()
