// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Welcome</a></li><li class="chapter-item expanded "><a href="dart-flow.html"><strong aria-hidden="true">1.</strong> DART flow</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="feature-branch.html"><strong aria-hidden="true">1.1.</strong> Feature Branch Workflow</a></li><li class="chapter-item expanded "><a href="git-setup.html"><strong aria-hidden="true">1.2.</strong> Using git</a></li><li class="chapter-item expanded "><a href="create-branch.html"><strong aria-hidden="true">1.3.</strong> Creating a feature branch</a></li><li class="chapter-item expanded "><a href="commit-messages.html"><strong aria-hidden="true">1.4.</strong> Committing your code</a></li><li class="chapter-item expanded "><a href="private.html"><strong aria-hidden="true">1.5.</strong> Public vs. Private development</a></li></ol></li><li class="chapter-item expanded "><a href="example-spec.html"><strong aria-hidden="true">2.</strong> Writing Specifications</a></li><li class="chapter-item expanded "><a href="github.html"><strong aria-hidden="true">3.</strong> GitHub</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="issues.html"><strong aria-hidden="true">3.1.</strong> Tracking tasks</a></li><li class="chapter-item expanded "><a href="bug-reports.html"><strong aria-hidden="true">3.2.</strong> Reporting bugs</a></li><li class="chapter-item expanded "><a href="reviewing.html"><strong aria-hidden="true">3.3.</strong> Pull Requests</a></li><li class="chapter-item expanded "><a href="releases.html"><strong aria-hidden="true">3.4.</strong> Creating a Release</a></li></ol></li><li class="chapter-item expanded "><a href="ideal-rotary-phone.html"><strong aria-hidden="true">4.</strong> GitHub Playground</a></li><li class="chapter-item expanded "><a href="users.html"><strong aria-hidden="true">5.</strong> Dealing with Users</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="people-debugging.html"><strong aria-hidden="true">5.1.</strong> User reported problems</a></li></ol></li><li class="chapter-item expanded "><a href="github-actions.html"><strong aria-hidden="true">6.</strong> GitHub Actions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="github-actions-workflow.html"><strong aria-hidden="true">6.1.</strong> Workflows</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="workflow-triggers.html"><strong aria-hidden="true">6.1.1.</strong> Triggers</a></li><li class="chapter-item expanded "><a href="workflow-runners.html"><strong aria-hidden="true">6.1.2.</strong> Runners</a></li><li class="chapter-item expanded "><a href="workflow-jobs.html"><strong aria-hidden="true">6.1.3.</strong> Jobs</a></li><li class="chapter-item expanded "><a href="workflow-testing.html"><strong aria-hidden="true">6.1.4.</strong> Testing</a></li><li class="chapter-item expanded "><a href="tidbits.html"><strong aria-hidden="true">6.1.5.</strong> Tidbits</a></li></ol></li><li class="chapter-item expanded "><a href="github-actions-composites.html"><strong aria-hidden="true">6.2.</strong> Composite Actions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="comp-act-requirements.html"><strong aria-hidden="true">6.2.1.</strong> Requirements</a></li><li class="chapter-item expanded "><a href="comp-act-usage.html"><strong aria-hidden="true">6.2.2.</strong> Usage</a></li><li class="chapter-item expanded "><a href="comp-act-yaml.html"><strong aria-hidden="true">6.2.3.</strong> Composites</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="containers.html"><strong aria-hidden="true">7.</strong> DART Docker Containers</a></li><li class="chapter-item expanded "><a href="web-and-docs.html"><strong aria-hidden="true">8.</strong> DART Web Presence</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="documentation.html"><strong aria-hidden="true">8.1.</strong> Documentation</a></li><li class="chapter-item expanded "><a href="website.html"><strong aria-hidden="true">8.2.</strong> DART website</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> Draft: Style Guide</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.</strong> Draft: DART</div></li><li class="chapter-item expanded affix "><a href="contributors.html">Contributors</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
