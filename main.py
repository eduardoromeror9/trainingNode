# Hacer una funcion que reciba una lista de nombres y devuelva otra lista de nombres con 3 nombres ramdom que no se repitan

import random

nombres = ["Eduardo", "Juan", "Galo", 
          "Lucas", "Soledad", "Cristian", 
          "Carlos C", "Carla Z", "Carlos Cabrera", 
          "Ignacio", "Elias", 
          "Dalma", "Ignacio Garcia", "Juanjo", 
          "Maxi", "Pedro", "Tomas" ]


def random_nombres(nombres):
    nombres_random = []
    while len(nombres_random) < 3:
        nombre_random = random.choice(nombres)
        if nombre_random not in nombres_random:
            nombres_random.append(nombre_random)
    return nombres_random

print(random_nombres(nombres))