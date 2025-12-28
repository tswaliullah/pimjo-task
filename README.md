# API Rate Limiting & Audit Logging

### Instructions on how to run the application locally.

Clone the project.

```bash
    git clone https://github.com/tswaliullah/pimjo-task.git
```

Go to project directory

```bash
    cd the project
```

Install require dependance

```bash
    npm install
```

Run server

```bash
npm run dev

```

---


### Rate limiting rules

- Fixed Window Rate Limiting Rule:
    - If IP not exist add IP and set count value 1
        - If count less than limit ACCEPT
        - otherwise REJECT
    - Check the IP 
    - If exist check Window Expired
    - If no count 1
    - If yes reset window and count 1
        - If count less than limit ACCEPT
        - otherwise REJECT



For Visualize Fixed Wondow Rate Limiting

![Fixed Window Rate Limiting](./fixedratelimit.png)

### Storage choice and reasoning
### Any assumptions or tradeoffs made