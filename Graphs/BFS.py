from collections import deque


graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["alice"] = ["peggy"]
graph["bob"] = ["anuj", "peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []


# Hash tables are dictionaries


def person_is_seller(name):
    return name[-1] == "m"


def search(name):
    search_queue = deque()
    search_queue += graph["you"]
    searched = []
    while search_queue:
        person = search_queue.popleft()
        if person not in searched:
            if person_is_seller(person):
                print(f" {person} is a mango seller!")
                return True
            else:
                search_queue += graph[person]
                searched.append(person)
    return False


search("you")


# graph = {}
# graph["wake up"] = ["exercise", "brush teeth", "pack lunch"]
# graph["exercise"] = ["shower"]
# graph["brush teeth"] = ["eat breakfast"]
# graph["shower"] = ["get dressed"]
# graph["get dressed"] = []
# graph["eat breakfast"] = []
# graph["pack lunch"] = []

# print(graph["exercise"], graph["shower"])
